import fs from 'fs';
import path from 'path';

const premiumJobsPath = path.join(process.cwd(), 'src/components/premium-jobs/premiumJobsData.ts');
const jobDetailsPath = path.join(process.cwd(), 'src/components/premium-jobs/jobDetailsData.ts');

function extractData(filePath: string, variableName: string) {
    let content = fs.readFileSync(filePath, 'utf-8');
    // Remove imports
    content = content.replace(/import\s+.*?;/g, '');
    // Remove types (simple version)
    content = content.replace(/:\s+[A-Z][a-zA-Z0-9<>\[\]]*/g, '');
    // Replace export const with const
    content = content.replace('export const ' + variableName, 'const ' + variableName);
    
    // Create a temporary file to run
    const tempFile = path.join(process.cwd(), 'temp_parse_' + variableName + '.ts');
    fs.writeFileSync(tempFile, content + `\nconsole.log(JSON.stringify(${variableName}));`);
    return tempFile;
}

try {
    const tempPremium = extractData(premiumJobsPath, 'premiumJobCards');
    const tempDetails = extractData(jobDetailsPath, 'jobDetailsBySlug');

    // We can't easily run them and capture output here without execSync
    // So I'll just write one final script that combines them.
    console.log('Files prepared. Now run them.');
} catch (err) {
    console.error(err);
}
