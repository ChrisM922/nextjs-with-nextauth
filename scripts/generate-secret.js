const crypto = require('crypto');

// Generate a secure random secret for NextAuth
function generateSecret() {
  const secret = crypto.randomBytes(32).toString('hex');
  return secret;
}

console.log('Generated NextAuth Secret:');
console.log(generateSecret());
console.log('');
console.log('Add this to your .env.local file:');
console.log(`NEXTAUTH_SECRET=${generateSecret()}`);
console.log('');
console.log('⚠️  Keep this secret secure and never commit it to version control!');
