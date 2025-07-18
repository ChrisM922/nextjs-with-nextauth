#!/bin/bash

# Security Update Script for Next.js with NextAuth

echo "🔒 Security Update Script"
echo "========================"

echo "📋 Checking for vulnerabilities..."
npm audit

echo ""
echo "🔍 Vulnerability Summary:"
VULNERABILITY_COUNT=$(npm audit --json 2>/dev/null | jq '.metadata.vulnerabilities.total' 2>/dev/null || echo "unknown")

if [ "$VULNERABILITY_COUNT" != "0" ] && [ "$VULNERABILITY_COUNT" != "unknown" ]; then
    echo "⚠️  Found $VULNERABILITY_COUNT vulnerabilities"
    echo ""
    echo "🔧 Applying security fixes..."
    
    # Backup package.json
    cp package.json package.json.backup
    echo "📄 Backed up package.json to package.json.backup"
    
    # Apply fixes
    npm audit fix --force
    
    echo ""
    echo "🔄 Regenerating Prisma client..."
    npx prisma generate
    
    echo ""
    echo "🧪 Testing build..."
    if npm run build; then
        echo "✅ Build successful!"
    else
        echo "❌ Build failed. Restoring backup..."
        cp package.json.backup package.json
        npm install
        echo "🔄 Restored package.json from backup"
    fi
    
    echo ""
    echo "🔐 Generating new NextAuth secret..."
    npm run generate-secret
    
    echo ""
    echo "⚠️  IMPORTANT: Update your .env.local file with the new secret above"
    echo "⚠️  Clear browser cookies/localStorage to avoid JWT session errors"
    
else
    echo "✅ No vulnerabilities found"
fi

echo ""
echo "🎯 Security update complete!"
echo "📚 For more info: https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities"
