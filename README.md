# Next.js with NextAuth Boilerplate

A production-ready Next.js boilerplate with complete authentication system, featuring NextAuth.js integration, user registration, protected routes, and modern UI.

## ✨ Features

- 🔐 **Complete Authentication** - NextAuth.js with JWT sessions
- 📧 **Email/Password Auth** - Secure registration and login
- 🌐 **OAuth Providers** - Google, GitHub (easily configurable)
- 🗃️ **Database Ready** - Prisma ORM with SQLite/PostgreSQL/MySQL
- 🎨 **Modern UI** - Tailwind CSS with responsive design
- ️ **Security First** - Latest security patches (Next.js 14.2.30)
- 🔒 **Protected Routes** - Middleware-based route protection
- � **TypeScript** - Full type safety throughout

## 🚀 Quick Start

### Automated Setup (Recommended)

**Windows:** `.\setup.bat` | **Unix/Mac:** `./setup.sh`

### Manual Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env.local
   npm run generate-secret  # Copy the generated secret to .env.local
   ```

3. **Setup database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Start development**
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see your app!

## 📋 Environment Variables

```env
# Required
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret-here
DATABASE_URL="file:./prisma/dev.db"

# Optional OAuth (uncomment to enable)
# GOOGLE_CLIENT_ID=your-google-client-id
# GOOGLE_CLIENT_SECRET=your-google-client-secret
# GITHUB_ID=your-github-id  
# GITHUB_SECRET=your-github-secret
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate-secret` - Generate secure NextAuth secret
- `npm run db:studio` - Open database viewer
- `npm run security-check` - Check for vulnerabilities

## 🔐 OAuth Setup (Optional)

### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create OAuth 2.0 credentials  
3. Add redirect URI: `http://localhost:3000/api/auth/callback/google`
4. Add credentials to `.env.local`

### GitHub OAuth  
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create new OAuth App
3. Set callback URL: `http://localhost:3000/api/auth/callback/github`
4. Add credentials to `.env.local`

## 🗄️ Database

**Default:** SQLite (file: `prisma/dev.db`)

**PostgreSQL/MySQL:** Update `DATABASE_URL` and `provider` in `prisma/schema.prisma`

```env
# PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/db"

# MySQL  
DATABASE_URL="mysql://user:password@localhost:3306/db"
```

## 🛡️ Security

This boilerplate includes:
- ✅ Latest Next.js security patches (14.2.30)
- ✅ Secure password hashing (bcrypt)
- ✅ CSRF protection
- ✅ Input validation (Zod)
- ✅ JWT session security
- ✅ Route protection middleware

**Security Commands:**
```bash
npm run security-check    # Check vulnerabilities
npm run security-update   # Apply security fixes
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy

### Production Checklist
- [ ] Set secure `NEXTAUTH_SECRET`
- [ ] Configure production database
- [ ] Enable HTTPS
- [ ] Set OAuth production URLs
- [ ] Test authentication flows

## 📁 Project Structure

```
src/
├── app/
│   ├── api/auth/           # NextAuth routes
│   ├── auth/               # Login/signup pages
│   ├── dashboard/          # Protected page example
│   └── page.tsx            # Homepage
├── components/             # React components  
├── lib/                    # Auth config, database
└── types/                  # TypeScript definitions
```

## 🛠️ Customization

**Add new pages:** Create in `src/app/`
**Protect routes:** Add to `middleware.ts`
**Style changes:** Modify `tailwind.config.js`
**Database schema:** Edit `prisma/schema.prisma`

## 🆘 Troubleshooting

**JWT Session Errors:** Generate new secret, clear browser data
**Database Issues:** Check `DATABASE_URL`, run `npx prisma db push`
**OAuth Issues:** Verify redirect URLs and credentials
**Build Errors:** Run `npm run security-check`

## 📚 Tech Stack

- **Next.js 14.2.30** - React framework
- **NextAuth.js 4.24.5** - Authentication
- **Prisma 6.12.0** - Database ORM
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **Zod** - Input validation

## 📄 License

MIT License - see [LICENSE](LICENSE) file.

---

**Built for the Next.js community** ❤️

Need help? [Open an issue](https://github.com/your-repo/issues) on GitHub.
