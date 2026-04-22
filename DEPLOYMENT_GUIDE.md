# 🚀 Deployment Guide

This guide covers deploying your IT portfolio website to Vercel (recommended) and other platforms.

## Prerequisites

- GitHub account (for version control)
- Vercel account (free)
- EmailJS account (free, for contact form)
- Git installed locally

## Step 1: Prepare Your Repository

### Initialize Git (if not already done)
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio commit"
```

### Update Repository URL in package.json
```json
"repository": {
  "type": "git",
  "url": "https://github.com/YOUR_USERNAME/portfolio.git"
}
```

## Step 2: Push to GitHub

1. **Create a new GitHub repository**
   - Go to https://github.com/new
   - Name: `portfolio`
   - Description: "My IT Portfolio Website"
   - Choose public or private
   - Don't initialize with README (we have one)

2. **Add remote and push**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Deploy to Vercel

### Option A: Import from GitHub (Easiest)

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Paste your GitHub repo URL
5. Select the `portfolio` repository
6. Click "Import"

### Configure Project

1. **Framework**: Select "Other"
2. **Root Directory**: `./`
3. **Build Command**: Leave empty (static site)
4. **Output Directory**: `./`

### Environment Variables

1. Click "Environment Variables"
2. Add these variables:
   ```
   EMAILJS_PUBLIC_KEY=your_public_key
   EMAILJS_SERVICE_ID=your_service_id
   EMAILJS_TEMPLATE_ID=your_template_id
   ```
3. Click "Deploy"

### Your Site is Live!
- Vercel will provide a URL: `https://portfolio-xxx.vercel.app`
- You can set a custom domain in Project Settings → Domains

### Option B: Deploy via CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to "Domains"
2. Click "Add Domain"
3. Enter your domain
4. Follow DNS instructions from your domain registrar
5. Typically takes 24-48 hours to propagate

## Step 5: Enable Auto-Deploys

1. Push changes to GitHub
2. Vercel will automatically detect changes
3. New deployment begins automatically
4. Your site updates without manual intervention

## Continuous Deployment Workflow

```
1. Make changes locally
2. Test in browser (npm run dev)
3. Commit changes: git commit -m "description"
4. Push to GitHub: git push origin main
5. Vercel auto-deploys
6. Your live site updates instantly
```

## Alternative Deployment Platforms

### Netlify

1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Connect GitHub
4. Select repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.`
6. Add environment variables
7. Deploy

### GitHub Pages

1. In repository settings → Pages
2. Select `main` branch as source
3. Save
4. Site available at: `https://YOUR_USERNAME.github.io/portfolio`

### Firebase Hosting

1. Install Firebase: `npm install -g firebase-tools`
2. Initialize: `firebase init`
3. Deploy: `firebase deploy`

## Optimization Checklist

- [ ] Minify CSS and JavaScript
- [ ] Optimize images (< 500KB each)
- [ ] Enable gzip compression
- [ ] Add favicon
- [ ] Set up analytics
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Check SEO

### Add Favicon

1. Create a favicon (16x16 or 32x32 PNG)
2. Place in root directory: `favicon.ico`
3. Add to `index.html` head:
   ```html
   <link rel="icon" type="image/x-icon" href="favicon.ico">
   ```

### Add Meta Tags (SEO)

In `index.html` head, add:
```html
<meta name="description" content="I'm a Junior Full Stack Developer...">
<meta name="keywords" content="portfolio, developer, PHP, JavaScript">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

## Troubleshooting

### Build Fails?
- Check `package.json` scripts are correct
- Ensure all files are committed
- Check for syntax errors in HTML/CSS/JS

### Contact Form Not Working?
- Verify EmailJS credentials in index.html
- Check Service ID and Template ID in assets/js/contact.js
- Test EmailJS separately at emailjs.com

### Styles Not Applied?
- Clear Vercel cache: Project Settings → Git
- Rebuild: Click "Redeploy"
- Vercel → Deployments → More → Redeploy

### Domain Not Working?
- Verify DNS settings with domain registrar
- Check Vercel DNS configuration
- May take 24-48 hours to propagate

## Maintenance

### Regular Updates

```bash
# Check for updates
npm outdated

# Update packages
npm update

# Deploy
git add .
git commit -m "Update dependencies"
git push origin main
```

### Monitor Performance

1. Vercel Dashboard → Analytics
2. Monitor page load times
3. Track errors and issues

### Backup Your Code

```bash
# Clone to backup
git clone https://github.com/YOUR_USERNAME/portfolio.git backup

# Or use GitHub's backup features
```

## Security Best Practices

1. **Never commit secrets**
   - Use `.env.example` template
   - Add `.env` to `.gitignore`

2. **Keep dependencies updated**
   - Regular `npm update`
   - Monitor for vulnerabilities

3. **HTTPS Only**
   - Vercel enables HTTPS automatically
   - Enforce SSL redirect

4. **Environment Variables**
   - Store sensitive data in Vercel dashboard
   - Never hardcode credentials

## Performance Tips

### Lighthouse Score Optimization

1. **Accessibility**: Add alt text to images
2. **Best Practices**: Use HTTPS, update dependencies
3. **SEO**: Add meta tags, structured data
4. **Performance**: Optimize images, minimize CSS

### Run Lighthouse Audit

1. Open website in Chrome
2. Right-click → Inspect
3. Lighthouse tab
4. Click "Analyze page load"
5. Fix issues

## Analytics Setup (Optional)

### Google Analytics

1. Create account at google.com/analytics
2. Add tracking code to `index.html`
3. Monitor visitor data

### Vercel Analytics

1. Vercel Dashboard → Analytics
2. View real-time metrics
3. Identify performance issues

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Set up custom domain
3. ✅ Configure EmailJS
4. ✅ Add analytics
5. ✅ Share portfolio URL
6. ✅ Update resume with portfolio link
7. ✅ Get feedback from peers

## Support

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Docs**: https://docs.github.com
- **EmailJS Docs**: https://www.emailjs.com/docs/

---

Your portfolio is now live! Congratulations! 🎉
