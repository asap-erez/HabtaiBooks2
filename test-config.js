// Simple test script to verify environment configuration
require('dotenv').config();

console.log('Testing environment configuration...');

// Check required environment variables
const requiredVars = ['PORT', 'JWT_SECRET', 'NODE_ENV', 'FRONTEND_URL', 'API_URL'];
const missingVars = [];

for (const varName of requiredVars) {
  if (!process.env[varName]) {
    missingVars.push(varName);
  }
}

if (missingVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingVars.join(', '));
  console.error('Please check your .env file');
} else {
  console.log('✅ All required environment variables are set');
}

// Check server configuration
console.log('\nServer Configuration:');
console.log(`- PORT: ${process.env.PORT}`);
console.log(`- NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`- FRONTEND_URL: ${process.env.FRONTEND_URL}`);
console.log(`- API_URL: ${process.env.API_URL}`);

// Check JWT configuration (without revealing the secret)
console.log('\nJWT Configuration:');
if (process.env.JWT_SECRET) {
  console.log(`- JWT_SECRET: ${process.env.JWT_SECRET.substring(0, 3)}${'*'.repeat(10)}`);
} else {
  console.log('- JWT_SECRET: Not set');
}

console.log('\nConfiguration test complete!');