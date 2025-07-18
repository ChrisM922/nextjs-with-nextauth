# Next.js with NextAuth Boilerplate

A comprehensive, production-ready Next.js boilerplate with NextAuth integration, featuring complete authentication system, user registration, protected routes, and modern UI components.

## Features

- 🔐 **NextAuth.js Integration** - Complete authentication system with JWT
- 📧 **Email/Password Authentication** - Secure credential-based login & registration
- 🌐 **OAuth Providers** - Google, GitHub (easily configurable)
- 🗃️ **Database Integration** - Prisma ORM with SQLite (PostgreSQL/MySQL ready)
- 🎨 **Modern UI** - Tailwind CSS with responsive design
- 📱 **TypeScript Support** - Full type safety throughout
- 🛡️ **Security First** - Latest security patches, middleware protection
- 🚀 **Production Ready** - Optimized for deployment with security best practices
- 🔒 **Protected Routes** - Middleware-based route protection
- 🧪 **API Testing** - Built-in API testing interface
- 📋 **Comprehensive Docs** - Setup guides, security docs, and checklists

## Tech Stack

- **Frontend**: Next.js 14.2.30, React 18, TypeScript
- **Authentication**: NextAuth.js 4.24.5
- **Database**: Prisma ORM 6.12.0, SQLite (easily switchable)
- **Styling**: Tailwind CSS 3.x
- **Validation**: Zod 3.x
- **Password**: bcryptjs 2.x

## Quick Start

### Option 1: Automated Setup (Recommended)

Run the setup script for your platform:

**Windows:**
```bash
.\setup.bat
```

**Unix/Linux/Mac:**
```bash
./setup.sh
```

### Option 2: Manual Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Generate a secure NextAuth secret:

```bash
npm run generate-secret
```

Update `.env.local` with your configuration:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret-here

# Database
DATABASE_URL="file:./dev.db"

# OAuth Providers (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

GITHUB_ID=your-github-id
GITHUB_SECRET=your-github-secret
```

### 3. Set up Database

Generate Prisma client and create the database:

```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema
- `npm run db:generate` - Generate Prisma client
- `npm run db:studio` - Open Prisma Studio
- `npm run generate-secret` - Generate secure NextAuth secret
- `npm run security-check` - Check for vulnerabilities
- `npm run security-update` - Apply security updates

## Authentication Features

### Email/Password Authentication
- User registration with form validation
- Secure password hashing with bcrypt
- Email-based login
- Protected routes and middleware
- Automatic session management

### OAuth Providers
- Google OAuth integration
- GitHub OAuth integration
- Easy to add more providers (Discord, Twitter, etc.)

### Session Management
- JWT-based sessions
- Secure session handling
- Automatic session refresh
- Session-based route protection

### Security Features
- ✅ **Latest Security Patches** - Updated to Next.js 14.2.30
- ✅ **CSRF Protection** - Built-in CSRF protection
- ✅ **Secure Headers** - Security headers configuration
- ✅ **Input Validation** - Zod-based validation
- ✅ **Password Security** - bcrypt hashing
- ✅ **Route Protection** - Middleware-based protection

## Project Structure

```
nextjs-with-nextauth/
├── prisma/
│   └── schema.prisma              # Database schema
├── scripts/
│   ├── generate-secret.js         # Secret generation utility
│   ├── security-update.sh         # Unix security update script
│   └── security-update.bat        # Windows security update script
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── [...nextauth]/
│   │   │   │   │   └── route.ts   # NextAuth API routes
│   │   │   │   └── register/
│   │   │   │       └── route.ts   # User registration API
│   │   │   └── protected/
│   │   │       └── route.ts       # Protected API example
│   │   ├── api-test/
│   │   │   └── page.tsx           # API testing page
│   │   ├── auth/
│   │   │   ├── signin/
│   │   │   │   └── page.tsx       # Sign in page
│   │   │   └── signup/
│   │   │       └── page.tsx       # Sign up page
│   │   ├── dashboard/
│   │   │   └── page.tsx           # Protected dashboard
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Homepage
│   ├── components/
│   │   ├── Hero.tsx               # Hero section
│   │   ├── Loading.tsx            # Loading components
│   │   ├── Navbar.tsx             # Navigation component
│   │   └── Providers.tsx          # Session provider
│   ├── lib/
│   │   ├── auth.ts                # NextAuth configuration
│   │   └── prisma.ts              # Prisma client
│   └── types/
│       └── next-auth.d.ts         # NextAuth type definitions
├── .env.example                   # Environment variables template
├── .env.local                     # Local environment variables
├── .gitignore                     # Git ignore rules
├── middleware.ts                  # Route protection middleware
├── next.config.js                 # Next.js configuration
├── package.json                   # Dependencies and scripts
├── CHECKLIST.md                   # Setup and deployment checklist
├── SECURITY.md                    # Security documentation
├── STRUCTURE.md                   # Detailed project structure
├── setup.bat                      # Windows setup script
├── setup.sh                       # Unix setup script
├── tailwind.config.js             # Tailwind CSS configuration
└── tsconfig.json                  # TypeScript configuration
```

## Pages and Features

### Public Pages
- **Homepage** (`/`) - Landing page with feature overview
- **Sign In** (`/auth/signin`) - Login form with OAuth options
- **Sign Up** (`/auth/signup`) - Registration form with validation

### Protected Pages
- **Dashboard** (`/dashboard`) - User dashboard (requires authentication)
- **API Test** (`/api-test`) - API testing interface (requires authentication)

### API Routes
- **Authentication** (`/api/auth/[...nextauth]`) - NextAuth endpoints
- **Registration** (`/api/auth/register`) - User registration
- **Protected API** (`/api/protected`) - Example protected endpoint

## Configuration

### Adding OAuth Providers

1. **Google OAuth**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
   - Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to `.env.local`

2. **GitHub OAuth**:
   - Go to GitHub Settings > Developer settings > OAuth Apps
   - Create a new OAuth App
   - Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
   - Add `GITHUB_ID` and `GITHUB_SECRET` to `.env.local`

3. **Adding More Providers**:
   - NextAuth supports 50+ providers
   - Check [NextAuth.js Providers](https://next-auth.js.org/providers/) for full list
   - Add provider configuration to `src/lib/auth.ts`

### Database Configuration

The project uses SQLite by default. To use PostgreSQL or MySQL:

1. Update `DATABASE_URL` in `.env.local`
2. Update `provider` in `prisma/schema.prisma`
3. Run `npx prisma db push`

**PostgreSQL Example:**
```env
DATABASE_URL="postgresql://username:password@localhost:5432/mydb"
```

**MySQL Example:**
```env
DATABASE_URL="mysql://username:password@localhost:3306/mydb"
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXTAUTH_URL` | Application URL | Yes |
| `NEXTAUTH_SECRET` | JWT secret key | Yes |
| `DATABASE_URL` | Database connection string | Yes |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | No |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | No |
| `GITHUB_ID` | GitHub OAuth client ID | No |
| `GITHUB_SECRET` | GitHub OAuth client secret | No |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `NEXTAUTH_URL` (your production URL)
   - `NEXTAUTH_SECRET` (generate with `npm run generate-secret`)
   - `DATABASE_URL` (your production database)
   - OAuth credentials (if using)
4. Deploy

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set environment variables in Netlify dashboard
4. Deploy

### Docker

A `Dockerfile` can be created for containerized deployment:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Other Platforms

For deployment to other platforms, make sure to:
- Set all environment variables
- Set up your production database
- Update `NEXTAUTH_URL` to your production URL
- Generate a secure `NEXTAUTH_SECRET`
- Configure OAuth providers for production URLs

## Security Considerations

### Security Updates

This project includes security monitoring and update tools:

```bash
# Check for vulnerabilities
npm run security-check

# Apply security updates
npm run security-update

# Generate new secure secret
npm run generate-secret
```

### Production Security Checklist

- [ ] Change `NEXTAUTH_SECRET` to a secure random string
- [ ] Use environment variables for all sensitive data
- [ ] Implement rate limiting for auth endpoints
- [ ] Use HTTPS in production
- [ ] Configure secure headers
- [ ] Set up monitoring and logging
- [ ] Regular security audits
- [ ] Database access controls
- [ ] Backup strategy

### Security Features

- **Latest Security Patches**: Updated to Next.js 14.2.30
- **Input Validation**: Zod-based validation on all forms
- **SQL Injection Protection**: Prisma ORM with parameterized queries
- **CSRF Protection**: Built-in NextAuth CSRF protection
- **Secure Session Management**: JWT with secure defaults
- **Password Security**: bcrypt hashing with salt rounds

For detailed security information, see [SECURITY.md](SECURITY.md).

## Development

### Getting Started

1. **Clone the repository**
2. **Follow the Quick Start guide** above
3. **Start developing** - All authentication is handled!

### Customization

#### Adding New Pages
- Create new pages in `src/app/`
- Use `middleware.ts` to protect routes
- Import session data with `useSession()` or `getServerSession()`

#### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/app/globals.css` for global styles
- Component styles use Tailwind classes

#### Database Schema
- Modify `prisma/schema.prisma`
- Run `npx prisma db push` to apply changes
- Generate new client with `npx prisma generate`

### Testing

```bash
# Run development server
npm run dev

# Test authentication flows
# - Register at /auth/signup
# - Login at /auth/signin
# - Access protected routes
# - Test API at /api-test

# Build for production
npm run build

# Run production server
npm start
```

## Documentation

- **[Setup Checklist](CHECKLIST.md)** - Complete setup and deployment guide
- **[Security Guide](SECURITY.md)** - Security best practices and updates
- **[Project Structure](STRUCTURE.md)** - Detailed project structure breakdown

## Troubleshooting

### Common Issues

1. **JWT Session Errors**
   - Generate new secret: `npm run generate-secret`
   - Clear browser cookies/localStorage
   - Restart development server

2. **Database Connection Issues**
   - Check `DATABASE_URL` in `.env.local`
   - Run `npx prisma db push`
   - Verify database file exists

3. **OAuth Provider Issues**
   - Check redirect URLs match exactly
   - Verify client ID and secret
   - Ensure provider is enabled

4. **Build Errors**
   - Run `npm run security-check`
   - Update dependencies if needed
   - Check TypeScript errors

### Getting Help

- Check the [NextAuth.js documentation](https://next-auth.js.org/)
- Review [Next.js documentation](https://nextjs.org/docs)
- Check [Prisma documentation](https://www.prisma.io/docs/)
- Open an issue on GitHub

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests and linting: `npm run lint`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Submit a pull request

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write secure code following OWASP guidelines
- Update documentation for new features
- Add appropriate error handling

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Next.js** - The React framework for production
- **NextAuth.js** - Authentication for Next.js
- **Prisma** - Next-generation ORM for Node.js
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Platform for frontend frameworks

---

**Built with ❤️ for the Next.js community**

For questions or support, please open an issue on GitHub.
