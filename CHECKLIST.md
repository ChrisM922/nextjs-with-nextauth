# Setup Checklist

## ✅ Basic Setup

- [ ] Clone or download the repository
- [ ] Run `npm install` to install dependencies
- [ ] Copy `.env.example` to `.env.local`
- [ ] Update `NEXTAUTH_SECRET` in `.env.local` (use `npm run generate-secret`)
- [ ] Run `npx prisma generate` to generate database client
- [ ] Run `npx prisma db push` to create database
- [ ] Run `npm run dev` to start development server
- [ ] Open `http://localhost:3000` in browser

## 🔐 Authentication Setup

### Email/Password Authentication
- [ ] Test user registration at `/auth/signup`
- [ ] Test user login at `/auth/signin`
- [ ] Test protected routes (dashboard)
- [ ] Test logout functionality

### OAuth Providers (Optional)

#### Google OAuth
- [ ] Create project in [Google Cloud Console](https://console.cloud.google.com/)
- [ ] Enable Google+ API
- [ ] Create OAuth 2.0 credentials
- [ ] Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
- [ ] Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to `.env.local`
- [ ] Test Google login

#### GitHub OAuth
- [ ] Go to [GitHub Developer Settings](https://github.com/settings/developers)
- [ ] Create new OAuth App
- [ ] Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
- [ ] Add `GITHUB_ID` and `GITHUB_SECRET` to `.env.local`
- [ ] Test GitHub login

## 🗄️ Database Setup

### SQLite (Default)
- [ ] Verify `dev.db` file created in root directory
- [ ] Test database connection
- [ ] View database with `npm run db:studio`

### PostgreSQL (Optional)
- [ ] Set up PostgreSQL database
- [ ] Update `DATABASE_URL` in `.env.local`
- [ ] Change `provider` to `postgresql` in `prisma/schema.prisma`
- [ ] Run `npx prisma db push`

### MySQL (Optional)
- [ ] Set up MySQL database
- [ ] Update `DATABASE_URL` in `.env.local`
- [ ] Change `provider` to `mysql` in `prisma/schema.prisma`
- [ ] Run `npx prisma db push`

## 🧪 Testing

- [ ] Test user registration flow
- [ ] Test user login flow
- [ ] Test protected routes (middleware)
- [ ] Test API protection (`/api/protected`)
- [ ] Test OAuth provider login (if configured)
- [ ] Test logout functionality
- [ ] Test API endpoints at `/api-test`

## 🚀 Production Deployment

### Environment Variables
- [ ] Set `NEXTAUTH_SECRET` to secure random string
- [ ] Set `NEXTAUTH_URL` to production URL
- [ ] Set production `DATABASE_URL`
- [ ] Set OAuth provider credentials (if using)

### Database
- [ ] Set up production database
- [ ] Run migrations in production
- [ ] Backup strategy in place

### Security
- [ ] HTTPS enabled
- [ ] Secure headers configured
- [ ] Rate limiting implemented (if needed)
- [ ] CORS configured properly

## 📱 Customization

### Styling
- [ ] Customize colors in `tailwind.config.js`
- [ ] Update global styles in `src/app/globals.css`
- [ ] Customize component styles
- [ ] Add your branding/logo

### Features
- [ ] Add custom fields to User model
- [ ] Implement password reset
- [ ] Add email verification
- [ ] Implement role-based access control
- [ ] Add user profile management

### Additional Providers
- [ ] Add more OAuth providers (Discord, Twitter, etc.)
- [ ] Configure custom provider settings
- [ ] Update provider UI components

## 🔧 Development

- [ ] Set up your preferred IDE
- [ ] Configure TypeScript settings
- [ ] Set up ESLint/Prettier
- [ ] Configure pre-commit hooks
- [ ] Set up testing framework (if needed)

## 📋 Maintenance

- [ ] Regular dependency updates
- [ ] Security updates
- [ ] Database backups
- [ ] Monitor authentication logs
- [ ] Performance monitoring

## 🆘 Troubleshooting

### Common Issues
- [ ] Environment variables not loading
- [ ] Database connection issues
- [ ] OAuth provider configuration
- [ ] TypeScript compilation errors
- [ ] CORS issues in production

### Debug Steps
1. Check console for errors
2. Verify environment variables
3. Test database connection
4. Check NextAuth debug logs
5. Verify OAuth provider configuration

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
