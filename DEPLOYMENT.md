# Netlify Deployment Guide

This guide will walk you through deploying the SwipeFeed Landing Page to Netlify.

## Prerequisites

- A GitHub account
- A Netlify account (sign up at [netlify.com](https://www.netlify.com))
- Your code pushed to a GitHub repository

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended for First-Time Deployment)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Log in to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Sign in with your GitHub account

3. **Create a New Site**
   - Click "Add new site" → "Import an existing project"
   - Select "GitHub" and authorize Netlify to access your repositories
   - Choose your repository from the list

4. **Configure Build Settings**
   Netlify will automatically detect the settings from `netlify.toml`, but verify:
   - **Build command:** `npm install && npm run build:netlify`
   - **Publish directory:** `dist/public`
   - **Node version:** 20 (automatically detected from `.nvmrc` or set in Environment variables)

5. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete (usually 2-5 minutes)

6. **Access Your Site**
   - Once deployed, you'll get a URL like `https://random-name-123.netlify.app`
   - You can customize the domain name in Site settings → Domain management

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   # Install dependencies (if not already done)
   npm install
   
   # Build the project first
   npm run build:netlify
   
   # Initialize Netlify (first time only)
   netlify init
   
   # Deploy to production
   netlify deploy --prod
   ```

   Or for a draft deployment:
   ```bash
   netlify deploy
   ```

## Configuration Files

### `netlify.toml`
This file contains all the Netlify configuration:
- **Build settings:** Command and publish directory
- **Redirects:** SPA routing support (all routes → index.html)
- **Headers:** Security and caching headers

### Build Process
- The `build:netlify` script only builds the static client (no server build needed)
- Output is in `dist/public` directory
- All routes are handled client-side via React Router

## Environment Variables

If you need to add environment variables:

1. Go to Site settings → Environment variables
2. Add variables for production, or specific branches
3. They'll be available during build time as `process.env.VARIABLE_NAME`

**Note:** This is a static site, so environment variables are only available at build time, not runtime.

## Custom Domain Setup

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Follow the DNS configuration instructions:
   - Add a CNAME record pointing to your Netlify site
   - Or add an A record for apex domains

## Continuous Deployment

Netlify automatically deploys when you push to your connected branch:
- **Production branch:** Usually `main` or `master`
- **Deploy previews:** Created for every pull request
- **Branch deploys:** Created for other branches (optional)

### Deploy Hooks
You can also trigger deployments via webhooks:
1. Go to Site settings → Build & deploy → Deploy hooks
2. Create a new hook
3. Use the webhook URL in CI/CD or external services

## Troubleshooting

### Build Fails

1. **Check build logs** in Netlify dashboard
2. **Common issues:**
   - Missing dependencies: Ensure `package-lock.json` is committed
   - Node version mismatch: Set `NODE_VERSION=20` in environment variables
   - Build timeout: Increase timeout in `netlify.toml` if needed

### Routes Not Working

- Ensure `netlify.toml` has the redirect rule: `/* → /index.html`
- Check that the build output includes `index.html` in the root

### Assets Not Loading

- Verify asset paths are relative (not absolute)
- Check that assets are in the `dist/public` directory after build
- Clear Netlify cache: Site settings → Build & deploy → Clear cache and deploy site

### Performance Issues

- Check that caching headers are set correctly in `netlify.toml`
- Use Netlify's image optimization if needed
- Enable Netlify's CDN (enabled by default)

## Local Testing

Test the production build locally:

```bash
# Build the project
npm run build:netlify

# Serve the built files (using a simple HTTP server)
npx serve dist/public
```

Or use Netlify CLI:

```bash
netlify dev
```

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Build Configuration](https://docs.netlify.com/configure-builds/overview/)
- [Netlify Redirects](https://docs.netlify.com/routing/redirects/)
- [Netlify Headers](https://docs.netlify.com/routing/headers/)

## Support

If you encounter issues:
1. Check the [Netlify Community Forums](https://answers.netlify.com/)
2. Review build logs in the Netlify dashboard
3. Check the [Netlify Status Page](https://www.netlifystatus.com/)

---

**Last Updated:** January 2025

