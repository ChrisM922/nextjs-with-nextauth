@echo off
:: Security Update Script for Next.js with NextAuth

echo 🔒 Security Update Script
echo ========================

echo 📋 Checking for vulnerabilities...
call npm audit

echo.
echo 🔍 Checking vulnerability count...
for /f "tokens=*" %%i in ('npm audit --json 2^>nul ^| findstr /c:"total"') do set AUDIT_RESULT=%%i

if not "%AUDIT_RESULT%"=="" (
    echo ⚠️  Found vulnerabilities
    echo.
    echo 🔧 Applying security fixes...
    
    :: Backup package.json
    copy package.json package.json.backup >nul
    echo 📄 Backed up package.json to package.json.backup
    
    :: Apply fixes
    call npm audit fix --force
    
    echo.
    echo 🔄 Regenerating Prisma client...
    call npx prisma generate
    
    echo.
    echo 🧪 Testing build...
    call npm run build
    if %errorlevel% neq 0 (
        echo ❌ Build failed. Restoring backup...
        copy package.json.backup package.json >nul
        call npm install
        echo 🔄 Restored package.json from backup
    ) else (
        echo ✅ Build successful!
    )
    
    echo.
    echo 🔐 Generating new NextAuth secret...
    call npm run generate-secret
    
    echo.
    echo ⚠️  IMPORTANT: Update your .env.local file with the new secret above
    echo ⚠️  Clear browser cookies/localStorage to avoid JWT session errors
    
) else (
    echo ✅ No vulnerabilities found
)

echo.
echo 🎯 Security update complete!
echo 📚 For more info: https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities

pause
