const fs = require('fs');
const path = require('path');

// Function to recursively process HTML files
function processHtmlFiles(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      processHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      fixHtmlFile(filePath);
    }
  });
}

// Function to fix paths in HTML files
function fixHtmlFile(filePath) {
  console.log(`Processing ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix paths in HTML files
  content = content.replace(/"\/_next\//g, '"/fit-4-existence/_next/');
  content = content.replace(/'\/_next\//g, "'/fit-4-existence/_next/");
  content = content.replace(/href="\//g, 'href="/fit-4-existence/');
  content = content.replace(/src="\//g, 'src="/fit-4-existence/');
  
  // Don't double-replace already fixed paths
  content = content.replace(/href="\/fit-4-existence\/fit-4-existence\//g, 'href="/fit-4-existence/');
  content = content.replace(/src="\/fit-4-existence\/fit-4-existence\//g, 'src="/fit-4-existence/');
  
  fs.writeFileSync(filePath, content);
}

// Main execution
const outDir = path.join(__dirname, 'out');

if (!fs.existsSync(outDir)) {
  console.error('The "out" directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Process HTML files
processHtmlFiles(outDir);

// Ensure .nojekyll file exists
const nojekyllPath = path.join(outDir, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created .nojekyll file');
}

console.log('GitHub Pages path fixing complete!');
