// Manual deployment helper script
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting manual deployment preparation...');

// Build the project
console.log('Building the project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

// Ensure .nojekyll file exists in the out directory
const outDir = path.join(__dirname, 'out');
const nojekyllPath = path.join(outDir, '.nojekyll');

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

console.log('\n✅ Build completed successfully!');
console.log('\nTo deploy manually to GitHub Pages:');
console.log('1. Go to your GitHub repository');
console.log('2. Navigate to Settings > Pages');
console.log('3. Under "Build and deployment", select "Deploy from a branch"');
console.log('4. Select the branch "gh-pages" and folder "/ (root)"');
console.log('5. Click "Save"');
console.log('\nAlternatively, you can use the gh-pages npm package:');
console.log('1. Run: npm install gh-pages --save-dev');
console.log('2. Add to package.json scripts: "deploy": "gh-pages -d out"');
console.log('3. Run: npm run deploy');
