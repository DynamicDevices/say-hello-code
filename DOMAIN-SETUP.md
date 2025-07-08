# Custom Domain Setup

## Current Configuration

The repository is configured to work with GitHub Pages at:
**https://dynamicdevices.github.io/say-hello-code**

## Custom Domain (Optional)

If you want to use a custom domain like `sayhellocode.com`:

1. **Purchase and configure domain** with your DNS provider
2. **Add CNAME file** to repository root:
   ```
   sayhellocode.com
   ```
3. **Configure DNS records:**
   - Add CNAME record: `www` → `DynamicDevices.github.io`
   - Add A records for apex domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
4. **Enable HTTPS** in GitHub Pages settings
5. **Update URLs** in HTML meta tags to use custom domain

## Current CNAME File

The CNAME file currently contains `sayhellocode.com`. 

**To use GitHub Pages URL only:**
- Delete the CNAME file
- All URLs are already configured for GitHub Pages

**To use custom domain:**
- Keep CNAME file as is
- Update DNS settings as described above
- Optionally update meta tags to use custom domain

## Current Site URLs

- **GitHub Pages:** https://DynamicDevices.github.io/say-hello-code
- **Repository:** https://github.com/DynamicDevices/say-hello-code
- **Custom Domain:** sayhellocode.com (if CNAME configured)