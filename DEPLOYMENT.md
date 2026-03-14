# The Answer — 53 | Deployment Guide

## Quick Start

### Local Development

```bash
cd /sessions/busy-confident-ptolemy/book-project/site

# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev
```

### Production Build

```bash
# Build the application
npm run build

# Start the production server
npm start
```

The site is now running in production mode and ready for deployment.

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the company behind Next.js and provides the best integration:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

Or connect your Git repository directly to Vercel dashboard and set up automatic deployments.

**Vercel Environment**: Zero additional configuration needed. Vercel auto-detects Next.js.

### Option 2: Self-Hosted (Node.js)

```bash
# Build the project
npm run build

# Start with Node.js (production mode)
npm start

# Or use PM2 for process management
npm i -g pm2
pm2 start "npm start" --name "answer-53"
```

**Port**: Defaults to 3000. Set via `PORT` environment variable.

### Option 3: Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app
COPY . .

# Build Next.js
RUN npm run build

# Expose port
EXPOSE 3000

# Start server
CMD ["npm", "start"]
```

Build and run:

```bash
# Build image
docker build -t answer-53 .

# Run container
docker run -p 3000:3000 answer-53
```

### Option 4: AWS (Lambda + API Gateway)

```bash
# Install Vercel adapter for AWS Lambda
npm i --save-dev @vercel/node

# Or use next-aws-lambda
npm i --save-dev next-aws-lambda
```

Then deploy via AWS Amplify or CloudFormation.

### Option 5: Google Cloud Run

```bash
# Create Container Image
docker build -t gcr.io/YOUR_PROJECT/answer-53 .

# Push to Google Container Registry
docker push gcr.io/YOUR_PROJECT/answer-53

# Deploy to Cloud Run
gcloud run deploy answer-53 \
  --image gcr.io/YOUR_PROJECT/answer-53 \
  --platform managed \
  --region us-central1
```

### Option 6: Azure App Service

```bash
# Create a resource group
az group create --name answer-53-rg --location eastus

# Create App Service plan
az appservice plan create \
  --name answer-53-plan \
  --resource-group answer-53-rg \
  --sku B1 --is-linux

# Create web app
az webapp create \
  --resource-group answer-53-rg \
  --plan answer-53-plan \
  --name answer-53-app \
  --runtime "NODE:18-lts"

# Deploy
az webapp up --name answer-53-app
```

## Environment Variables

Create a `.env.local` file (for development) or set via your deployment platform:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Pre-Deployment Checklist

- [ ] Run `npm run build` and verify no errors
- [ ] Test locally with `npm start`
- [ ] Verify all pages load correctly
- [ ] Test responsive design on mobile
- [ ] Check that all links work
- [ ] Verify particle canvas animation runs smoothly
- [ ] Test probability calculator interactivity
- [ ] Check that chapter navigation works
- [ ] Verify 404 page displays for invalid routes
- [ ] Test on target browsers

## Performance Optimization

The site is already optimized, but you can further improve:

### Caching

Add to your server configuration (Nginx, Apache, or via HTTP headers):

```
Cache-Control: public, max-age=3600, stale-while-revalidate=86400
```

### CDN

Deploy via:
- Vercel (built-in CDN edge network)
- Cloudflare (free tier available)
- AWS CloudFront
- Bunny CDN
- Fastly

### Monitoring

Set up monitoring with:
- Vercel Analytics (built-in)
- Google Analytics (add `NEXT_PUBLIC_GA_ID` to env)
- Sentry (error tracking)
- New Relic (application monitoring)

## Security

### SSL/HTTPS

- Vercel: Automatic SSL certificate
- Self-hosted: Use Let's Encrypt with Certbot
- Cloud platforms: Built-in or via AWS Certificate Manager

### Headers

The site includes security headers configured in `next.config.js`. Additional security measures:

```javascript
// Add to next.config.js
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
      ],
    },
  ];
}
```

## Scaling

For high traffic:

1. **Caching**: Vercel edge caching, or use Cloudflare
2. **Database**: Not needed (static site)
3. **Load Balancing**: Automatic with Vercel or cloud platforms
4. **CDN**: Deploy to multiple regions

## Troubleshooting

### Build fails

```bash
# Clear cache and rebuild
rm -rf .next
npm install
npm run build
```

### Port already in use

```bash
# Use different port
PORT=3001 npm start

# Or kill process
lsof -i :3000
kill -9 <PID>
```

### Styles not loading

```bash
# Rebuild Tailwind
npm run build

# Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
```

### Components not rendering

Check browser console for errors. Most common:
- Missing dependencies: Run `npm install`
- TypeScript errors: Run `npm run build`
- Dynamic content issues: Verify `use client` directive

## Monitoring & Analytics

### Vercel Analytics

Add to `next.config.js`:

```javascript
module.exports = {
  // ... other config
  analytics: {
    provider: 'vercel',
  },
};
```

### Google Analytics

1. Add Google Analytics ID to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXX
   ```

2. Install `@next/third-parties`:
   ```bash
   npm install @next/third-parties
   ```

3. Add to `app/layout.tsx`:
   ```typescript
   import { GoogleAnalytics } from '@next/third-parties/google'
   ```

## Continuous Integration/Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: vercel/action@v4
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Support & Help

For issues:

1. Check Next.js documentation: https://nextjs.org/docs
2. Check Tailwind docs: https://tailwindcss.com/docs
3. Framer Motion docs: https://www.framer.com/motion/
4. Vercel docs: https://vercel.com/docs

---

**The Answer — 53 is ready for deployment.** Choose your platform and deploy with confidence.
