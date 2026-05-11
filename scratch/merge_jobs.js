const fs = require('fs');
const path = require('path');

const premiumJobsPath = 'src/components/premium-jobs/premiumJobsData.ts';
const jobDetailsPath = 'src/components/premium-jobs/jobDetailsData.ts';
const outputPath = 'src/data/premium_jobs.json';

function cleanAndParse(content, variableName) {
    // Remove imports
    let cleaned = content.replace(/^import\s+.*?;/gm, '');
    // Remove type annotations like ": PremiumJob[]" or ": JobDetailContent"
    cleaned = cleaned.replace(/:\s*[A-Z][a-zA-Z0-9<>\[\]]*/g, '');
    // Remove "export type ... { ... }"
    cleaned = cleaned.replace(/export\s+type\s+[A-Z][a-zA-Z0-9]*\s*=\s*[\s\S]*?(?=\n\n|\nexport)/g, '');
    // Remove simple types
    cleaned = cleaned.replace(/export\s+type\s+.*?;/g, '');
    
    // Wrap in a function and return the variable
    const script = cleaned + `\nreturn ${variableName};`;
    try {
        const fn = new Function('require', script);
        return fn(require);
    } catch (e) {
        console.error('Error parsing ' + variableName + ':', e);
        // Fallback: try to find the array/object with regex if eval fails
        const startIdx = cleaned.indexOf(`${variableName} =`);
        if (startIdx === -1) throw new Error('Could not find variable ' + variableName);
        const dataPart = cleaned.substring(cleaned.indexOf('=', startIdx) + 1).trim();
        // This is risky for large objects but let's try
        return eval('(' + dataPart + ')');
    }
}

try {
    const jobsContent = fs.readFileSync(premiumJobsPath, 'utf-8');
    const detailsContent = fs.readFileSync(jobDetailsPath, 'utf-8');

    const premiumJobCards = cleanAndParse(jobsContent, 'premiumJobCards');
    const jobDetailsBySlug = cleanAndParse(detailsContent, 'jobDetailsBySlug');

    const combinedJobs = premiumJobCards.map(job => {
        const details = jobDetailsBySlug[job.slug];
        return {
            ...job,
            details: details || null
        };
    });

    if (!fs.existsSync('src/data')) {
        fs.mkdirSync('src/data', { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(combinedJobs, null, 2));
    console.log(`Successfully merged ${combinedJobs.length} jobs into ${outputPath}`);
} catch (err) {
    console.error('Conversion failed:', err);
    process.exit(1);
}
