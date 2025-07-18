# Instructions for OAuth Setup

## To fix the OAuth redirect issue:

The OAuth buttons are showing but the providers aren't configured, which causes NextAuth to redirect back to the signin page.

### Google OAuth Setup:
1. Go to https://console.cloud.google.com/
2. Create/select a project
3. Enable Google+ API
4. Credentials → Create OAuth 2.0 Client ID
5. Authorized redirect URI: http://localhost:3000/api/auth/callback/google

### GitHub OAuth Setup:
1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Create new OAuth App
3. Authorization callback URL: http://localhost:3000/api/auth/callback/github

### Update .env.local:
Uncomment and replace the OAuth credentials in .env.local with your actual values:

```
GOOGLE_CLIENT_ID=your-actual-google-client-id
GOOGLE_CLIENT_SECRET=your-actual-google-client-secret

GITHUB_ID=your-actual-github-id
GITHUB_SECRET=your-actual-github-secret
```

## For Vercel Production Deployment:

### 1. Update OAuth Provider Callback URLs:
**Google OAuth:**
- Add: `https://your-vercel-app.vercel.app/api/auth/callback/google`

**GitHub OAuth:**
- Add: `https://your-vercel-app.vercel.app/api/auth/callback/github`

### 2. Vercel Environment Variables:
Set these in your Vercel dashboard (Project Settings → Environment Variables):

```
NEXTAUTH_URL=https://your-vercel-app.vercel.app
NEXTAUTH_SECRET=your-nextauth-secret
DATABASE_URL=your-production-database-url
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_ID=your-github-id
GITHUB_SECRET=your-github-secret
```

### 3. Common Vercel Issues:
- **NEXTAUTH_URL must match exactly** (no trailing slash)
- **Database must be accessible** from Vercel (use Vercel Postgres, PlanetScale, etc.)
- **Check Vercel function logs** if OAuth redirects to signin page
- **OAuth callback URLs** must use your exact Vercel domain

### Debug:
Visit `/debug` on your deployed app to check session and environment configuration.

After setting up the credentials, restart your development server and the OAuth flow should work correctly.
