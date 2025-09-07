// Script to prepare for GitHub repository
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Checking project preparation for GitHub...');

// Check for required files
const requiredFiles = [
  '.env',
  '.gitignore',
  'vercel.json',
  'package.json',
  'server.js',
  'serve.js',
  'index.html',
  'loginp.html',
  'env-config.js',
  '.github/workflows/ci.yml'
];

const missingFiles = [];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(process.cwd(), file))) {
    missingFiles.push(file);
  }
}

if (missingFiles.length > 0) {
  console.error('❌ Missing required files:', missingFiles.join(', '));
} else {
  console.log('✅ All required files are present');
}

// Check .gitignore content
const gitignoreContent = fs.readFileSync(path.join(process.cwd(), '.gitignore'), 'utf8');
if (!gitignoreContent.includes('.env') || !gitignoreContent.includes('node_modules')) {
  console.error('❌ .gitignore is missing important entries (.env or node_modules)');
} else {
  console.log('✅ .gitignore contains necessary entries');
}

// Check package.json
const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
if (!packageJson.dependencies.dotenv) {
  console.error('❌ dotenv dependency is missing in package.json');
} else {
  console.log('✅ Required dependencies are present');
}

if (!packageJson.scripts.build) {
  console.error('❌ build script is missing in package.json');
} else {
  console.log('✅ Required scripts are present');
}

// Check vercel.json
const vercelJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'vercel.json'), 'utf8'));
if (!vercelJson.builds || !vercelJson.routes) {
  console.error('❌ vercel.json is missing builds or routes configuration');
} else {
  console.log('✅ vercel.json is properly configured');
}

console.log('\nGitHub repository preparation check complete!');