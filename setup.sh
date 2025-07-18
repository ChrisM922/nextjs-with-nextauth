#!/bin/bash

# Next.js with NextAuth Setup Script

echo "🚀 Setting up Next.js with NextAuth..."

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cp .env.example .env.local
    echo "✅ Created .env.local from .env.example"
    echo "⚠️  Please update the values in .env.local"
else
    echo "✅ .env.local already exists"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Generate Prisma client
echo "🗃️  Generating Prisma client..."
npx prisma generate

# Create database
echo "🗄️  Creating database..."
npx prisma db push

echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Update your .env.local file with your actual values"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "🔐 OAuth Setup (optional):"
echo "- Google: https://console.cloud.google.com/"
echo "- GitHub: https://github.com/settings/developers"
echo ""
echo "📚 Documentation: https://next-auth.js.org/"
