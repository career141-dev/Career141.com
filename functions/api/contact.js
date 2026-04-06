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

function validatePayload(body) {
  const errors = [];

  if (!body || typeof body !== "object") {
    return [{ path: ["_root"], message: "Invalid request body" }];
  }

  if (!body.name || String(body.name).trim().length < 2) {
    errors.push({ path: ["name"], message: "Name must be at least 2 characters" });
  }
  if (!body.email || !isValidEmail(String(body.email))) {
    errors.push({ path: ["email"], message: "Invalid email address" });
  }
  if (!body.phone || String(body.phone).trim().length < 5) {
    errors.push({ path: ["phone"], message: "Invalid phone number" });
  }
  if (!body.message || String(body.message).trim().length < 10) {
    errors.push({ path: ["message"], message: "Message must be at least 10 characters" });
  }
  if (!body.turnstileToken || String(body.turnstileToken).trim().length < 1) {
    errors.push({ path: ["turnstileToken"], message: "Captcha verification is required" });
  }

  return errors;
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

async function sendEmailViaBrevo(env, data) {
  const brevoApiKey = env.BREVO_API_KEY;
  if (!brevoApiKey) {
    console.error("BREVO_API_KEY is missing in environment");
    return false;
  }

  const senderEmail = env.BREVO_SENDER_EMAIL || "noreply@career141.com";
  const senderName = env.BREVO_SENDER_NAME || "Career141";

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${sanitizeInput(data.name)}</p>
    <p><strong>Designation:</strong> ${sanitizeInput(data.designation || "N/A")}</p>
    <p><strong>Email:</strong> ${sanitizeInput(data.email)}</p>
    <p><strong>Company:</strong> ${sanitizeInput(data.companyName || "N/A")}</p>
    <p><strong>Phone:</strong> ${sanitizeInput(data.phone)}</p>
    <p><strong>Country:</strong> ${sanitizeInput(data.country || "N/A")}</p>
    <p><strong>Message:</strong></p>
    <p>${sanitizeInput(data.message).replace(/\n/g, "<br>")}</p>
  `;

  const textContent = `
    New Contact Form Submission

    Name: ${sanitizeInput(data.name)}
    Designation: ${sanitizeInput(data.designation || "N/A")}
    Email: ${sanitizeInput(data.email)}
    Company: ${sanitizeInput(data.companyName || "N/A")}
    Phone: ${sanitizeInput(data.phone)}
    Country: ${sanitizeInput(data.country || "N/A")}
    Message: ${sanitizeInput(data.message)}
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
        to: [
          {
            email: env.CONTACT_RECIPIENT_EMAIL || "sanjeev@career141.com",
            name: "Career141 Contact",
          },
        ],
        subject: `New Contact Form: ${sanitizeInput(data.name)}`,
        htmlContent,
        textContent,
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

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return json({ error: "Invalid content type" }, 400);
  }

  try {
    const body = await request.json();
    const errors = validatePayload(body);

    if (errors.length > 0) {
      return json({ error: "Validation failed", details: errors }, 400);
    }

    const verified = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, body.turnstileToken);
    if (!verified) {
      return json({ error: "Captcha verification failed" }, 400);
    }

    const success = await sendEmailViaBrevo(env, body);
    if (!success) {
      return json({ error: "Failed to send email. Please try again later." }, 500);
    }

    return json({ message: "Email sent successfully" }, 200);
  } catch (error) {
    console.error("Contact form API error:", error);
    return json({ error: "Internal server error" }, 500);
  }
}

