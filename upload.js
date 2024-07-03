const { exec } = require('child_process');
const path = require('path');

const filePath = process.argv[2];

console.log('Arguments:', process.argv);

if (!filePath) {
  console.error('No file path provided');
  process.exit(1);
}

const relativePath = path.relative(process.cwd(), filePath);
const hubspotPath = `sibmpl_theme/${relativePath.replace(/\\/g, '/')}`;

exec(`hs upload ${relativePath.replace(/\\/g, '/')} ${hubspotPath}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error uploading ${relativePath}:`, stderr);
    process.exit(1);
  }
  console.log(`Successfully uploaded ${relativePath} to ${hubspotPath}`);
});
