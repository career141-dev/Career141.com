const rateLimit = new Map();
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 60 * 1000;

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) return false;
  record.count += 1;
  return true;
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function getClientIp(request) {
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp;

  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();

  return request.headers.get("x-real-ip") || "unknown";
}

function sanitizeInput(input) {
  return String(input || "")
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 0x8000;

  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...chunk);
  }

  return btoa(binary);
}

async function verifyTurnstile(secret, token) {
  // If secret is missing, we bypass verification in development/local environments
  if (!secret) {
    console.warn("TURNSTILE_SECRET_KEY is missing. Bypassing verification for development.");
    return true;
  }

  const formData = new URLSearchParams();
  formData.append("secret", secret);
  formData.append("response", token || "");

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) return false;

    const result = await response.json();
    return Boolean(result.success);
  } catch (err) {
    console.error("Turnstile verification error:", err);
    return false;
  }
}

async function sendEmailViaBrevo(env, fields, fileName, fileBase64) {
  const brevoApiKey = env.BREVO_API_KEY;
  if (!brevoApiKey) {
    console.error("BREVO_API_KEY is missing in environment");
    return false;
  }

  const senderEmail = env.BREVO_SENDER_EMAIL || "noreply@career141.com";
  const senderName = env.BREVO_SENDER_NAME || "Career141";

  const htmlContent = `
    <h2>New Job Application</h2>
    <p><strong>Job:</strong> ${sanitizeInput(fields.jobTitle)}</p>
    <p><strong>Name:</strong> ${sanitizeInput(fields.firstName)} ${sanitizeInput(fields.lastName)}</p>
    <p><strong>Email:</strong> ${sanitizeInput(fields.email)}</p>
    <p><strong>Phone:</strong> ${sanitizeInput(fields.phone)}</p>
    <p><strong>Age:</strong> ${sanitizeInput(fields.age)}</p>
    <p><strong>Current Designation:</strong> ${sanitizeInput(fields.designation || "N/A")}</p>
    <p><strong>Attachment:</strong> ${sanitizeInput(fileName)}</p>
  `;

  const textContent = `
    New Job Application

    Job: ${sanitizeInput(fields.jobTitle)}
    Name: ${sanitizeInput(fields.firstName)} ${sanitizeInput(fields.lastName)}
    Email: ${sanitizeInput(fields.email)}
    Phone: ${sanitizeInput(fields.phone)}
    Age: ${sanitizeInput(fields.age)}
    Current Designation: ${sanitizeInput(fields.designation || "N/A")}
    Attachment: ${sanitizeInput(fileName)}
  `;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email: "sanjeev@career141.com", name: "Sanjeev - Career141" }],
        subject: `Job Application: ${sanitizeInput(fields.jobTitle)} — ${sanitizeInput(fields.firstName)} ${sanitizeInput(fields.lastName)}`,
        htmlContent,
        textContent,
        attachment: [{ name: fileName, content: fileBase64 }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Brevo API Error:", response.status, errText);
      return false;
    }

    return true;
  } catch (err) {
    console.error("Error sending email via Brevo:", err);
    return false;
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const clientIP = getClientIp(request);
  if (!checkRateLimit(clientIP)) {
    return json({ error: "Too many requests. Please try again later." }, 429);
  }

  try {
    const formData = await request.formData();

    const firstName = String(formData.get("firstName") || "");
    const lastName = String(formData.get("lastName") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const age = String(formData.get("age") || "");
    const designation = String(formData.get("designation") || "");
    const jobTitle = String(formData.get("jobTitle") || "");
    const turnstileToken = String(formData.get("turnstileToken") || "");
    const file = formData.get("file");

    const errors = [];
    if (firstName.trim().length < 2) errors.push({ path: ["firstName"], message: "First name must be at least 2 characters" });
    if (lastName.trim().length < 2) errors.push({ path: ["lastName"], message: "Last name must be at least 2 characters" });
    if (!email || !isValidEmail(email)) errors.push({ path: ["email"], message: "Valid email is required" });
    if (!phone || phone.trim().length < 5) errors.push({ path: ["phone"], message: "Valid phone number is required" });
    if (!age || Number(age) < 18) errors.push({ path: ["age"], message: "Age must be 18 or above" });
    if (!jobTitle) errors.push({ path: ["jobTitle"], message: "Job title is required" });
    if (!turnstileToken) errors.push({ path: ["turnstileToken"], message: "Captcha is required" });

    if (!(file instanceof File)) {
      errors.push({ path: ["file"], message: "CV/resume file is required" });
    } else {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) errors.push({ path: ["file"], message: "Only PDF, DOC, and DOCX files are allowed" });
      if (file.size > 5 * 1024 * 1024) errors.push({ path: ["file"], message: "File size must be under 5MB" });
    }

    if (errors.length > 0) {
      return json({ error: "Validation failed", details: errors }, 400);
    }

    const verified = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, turnstileToken);
    if (!verified) {
      return json({ error: "Captcha verification failed" }, 400);
    }

    const fileBuffer = await file.arrayBuffer();
    const fileBase64 = arrayBufferToBase64(fileBuffer);

    const fields = { firstName, lastName, email, phone, age, designation, jobTitle };
    const success = await sendEmailViaBrevo(env, fields, file.name, fileBase64);

    if (!success) {
      return json({ error: "Failed to send application. Please try again later." }, 500);
    }

    return json({ message: "Application sent successfully" }, 200);
  } catch (error) {
    console.error("Apply form API error:", error);
    return json({ error: "Internal server error" }, 500);
  }
}

