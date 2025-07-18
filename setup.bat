@echo off
echo 🚀 Setting up Next.js with NextAuth...

:: Check if .env.local exists
if not exist .env.local (
    echo 📝 Creating .env.local file...
    copy .env.example .env.local >nul
    echo ✅ Created .env.local from .env.example
    echo ⚠️  Please update the values in .env.local
) else (
    echo ✅ .env.local already exists
)

:: Install dependencies
echo 📦 Installing dependencies...
call npm install

:: Generate Prisma client
echo 🗃️  Generating Prisma client...
call npx prisma generate

:: Create database
echo 🗄️  Creating database...
call npx prisma db push

echo.
echo ✅ Setup complete!
echo.
echo 🎯 Next steps:
echo 1. Update your .env.local file with your actual values
echo 2. Run 'npm run dev' to start the development server
echo 3. Open http://localhost:3000 in your browser
echo.
echo 🔐 OAuth Setup (optional):
echo - Google: https://console.cloud.google.com/
echo - GitHub: https://github.com/settings/developers
echo.
echo 📚 Documentation: https://next-auth.js.org/

pause
