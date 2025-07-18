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
NEXT_PUBLIC_GOOGLE_ENABLED=true

GITHUB_ID=your-actual-github-id
GITHUB_SECRET=your-actual-github-secret
NEXT_PUBLIC_GITHUB_ENABLED=true
```

After setting up the credentials, restart your development server and the OAuth flow should work correctly.
