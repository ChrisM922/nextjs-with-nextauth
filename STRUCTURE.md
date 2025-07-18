# Project Structure

```
nextjs-with-nextauth/
├── prisma/
│   └── schema.prisma              # Database schema
├── scripts/
│   └── generate-secret.js         # Secret generation utility
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
│   │   ├── Navbar.tsx             # Navigation
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
├── postcss.config.js              # PostCSS configuration
├── README.md                      # Project documentation
├── setup.bat                      # Windows setup script
├── setup.sh                       # Unix setup script
├── tailwind.config.js             # Tailwind CSS configuration
└── tsconfig.json                  # TypeScript configuration
```

## Key Features by File

### Authentication Core
- `src/lib/auth.ts` - NextAuth configuration with providers
- `src/app/api/auth/[...nextauth]/route.ts` - Authentication endpoints
- `src/app/api/auth/register/route.ts` - User registration
- `src/types/next-auth.d.ts` - TypeScript definitions

### Database
- `prisma/schema.prisma` - Database schema with User, Session, Account tables
- `src/lib/prisma.ts` - Database client configuration

### UI Components
- `src/components/Navbar.tsx` - Navigation with auth state
- `src/components/Hero.tsx` - Landing page hero section
- `src/components/Providers.tsx` - Session provider wrapper
- `src/components/Loading.tsx` - Loading states

### Pages
- `src/app/page.tsx` - Homepage with auth status
- `src/app/auth/signin/page.tsx` - Sign in form
- `src/app/auth/signup/page.tsx` - Registration form
- `src/app/dashboard/page.tsx` - Protected dashboard
- `src/app/api-test/page.tsx` - API testing interface

### Protection
- `middleware.ts` - Route protection middleware
- `src/app/api/protected/route.ts` - Protected API example

### Configuration
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS setup
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration

### Setup & Utilities
- `setup.sh` / `setup.bat` - Project setup scripts
- `scripts/generate-secret.js` - Secret generation utility
- `.env.example` - Environment variables template
