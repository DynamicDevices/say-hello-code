# GitHub Pages Deployment Guide

## Quick Setup

1. **Fork or create repository** on GitHub
2. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main (or master)
   - Folder: / (root)

## GitHub Pages Compatibility

### ✅ What Works
- **Service Worker** - Full PWA support
- **Manifest.json** - Offline capabilities
- **Custom 404.html** - Automatic routing
- **All JavaScript/CSS** - Client-side features
- **Performance monitoring** - Analytics work
- **Security meta tags** - Basic protection

### ❌ What Doesn't Work
- **Server configuration** - No .htaccess support
- **Custom headers** - Limited to meta tags
- **Server-side compression** - Handled by GitHub
- **Custom redirects** - Limited options

## Deployment Steps

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Wait for deployment** (usually 1-10 minutes)

3. **Your site will be available at:**
   `https://DynamicDevices.github.io/say-hello-code`

## Custom Domain (Optional)

**Option 1: Use GitHub Pages URL (Default)**
- Site available at: `https://dynamicdevices.github.io/say-hello-code`
- Delete CNAME file if you don't want custom domain
- All URLs already configured for GitHub Pages

**Option 2: Use Custom Domain**
1. Add `CNAME` file with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS with your domain provider:
   - Add CNAME record pointing to `DynamicDevices.github.io`
   - Or use A records for apex domain (see DOMAIN-SETUP.md)

3. Enable HTTPS in GitHub Pages settings

4. Optionally update meta tags in index.html to use custom domain

See [DOMAIN-SETUP.md](DOMAIN-SETUP.md) for detailed instructions.

## Performance on GitHub Pages

GitHub Pages automatically provides:
- **HTTPS** - SSL certificates
- **CDN** - Global content delivery
- **Compression** - Gzip compression
- **Caching** - Automatic cache headers

## Monitoring

Use the included performance monitoring to track:
- Page load times
- JavaScript errors
- User interactions

## Troubleshooting

- **404 errors**: Check file paths are relative
- **Service Worker issues**: Clear browser cache
- **Manifest problems**: Validate JSON syntax
- **Build failures**: Check GitHub Actions tab

## Local Development

```bash
# Install dependencies
npm install

# Start local server
npm run serve

# Validate HTML
npm run validate

# Run Lighthouse audit
npm run lighthouse
```