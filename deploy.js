// Simple script to help with GitHub Pages deployment
const fs = require('fs');
const path = require('path');

// Ensure .nojekyll file exists in the out directory
const outDir = path.join(__dirname, 'out');
const nojekyllPath = path.join(outDir, '.nojekyll');

if (!fs.existsSync(outDir)) {
  console.error('The "out" directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Create .nojekyll file if it doesn't exist
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created .nojekyll file in the out directory');
}

// Copy CNAME file from public to out directory if it exists
const publicCnamePath = path.join(__dirname, 'public', 'CNAME');
const outCnamePath = path.join(outDir, 'CNAME');

if (fs.existsSync(publicCnamePath)) {
  fs.copyFileSync(publicCnamePath, outCnamePath);
  console.log('Copied CNAME file to the out directory');
}

console.log('Deployment preparation complete!');
