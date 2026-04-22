# ❓ FAQ & Troubleshooting

Common questions and solutions for your IT portfolio.

## General Questions

### Q: How do I edit the portfolio?
A: Edit `index.html` for content and structure, `assets/css/styles.css` for styling, and files in `assets/js/` for functionality.

### Q: Do I need to code to use this?
A: Basic HTML editing skills help, but most customization is simple find-and-replace in HTML. No complex coding needed!

### Q: Can I use this as a template for clients?
A: Yes! It's MIT licensed. You can use, modify, and distribute it as needed.

### Q: How do I add more projects?
A: Copy the project card HTML and paste it again. Update the title, description, tech stack, and link.

### Q: Can I remove the chatbot?
A: Yes! Delete the entire chatbot section from HTML (search for `id="chatbot"`).

## Setup & Configuration

### Q: Where do I get my EmailJS credentials?
A: 
1. Go to emailjs.com
2. Sign up (free)
3. Create email service (Gmail)
4. Create email template
5. Copy Public Key, Service ID, Template ID from dashboard

### Q: How do I test EmailJS before deploying?
A:
1. Update credentials in index.html and contact.js
2. Open index.html locally
3. Fill out contact form
4. Check your email
5. Check browser console (F12) for errors

### Q: What's the difference between .env and environment variables?
A: `.env` is local, `.env.example` is template. Vercel uses "Environment Variables" in dashboard for deployed site.

### Q: Do I need Node.js installed?
A: Only if you want to build Tailwind. For CDN version, no Node.js needed!

## Deployment & Hosting

### Q: What's the best way to deploy?
A: Vercel is easiest:
1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Auto-deploys on every push

### Q: Can I use different hosting (not Vercel)?
A: Yes! Works on:
- Netlify
- GitHub Pages
- Firebase Hosting
- Any static hosting
- Traditional web hosts (FTP)

### Q: How long does deployment take?
A: Usually 30-60 seconds for Vercel. GitHub Pages can take 2-5 minutes.

### Q: Can I use a custom domain?
A: Yes! Add in Vercel dashboard:
1. Domains → Add Domain
2. Update DNS settings with registrar
3. Takes 24-48 hours to propagate

### Q: How do I update my live portfolio?
A: Just push changes to GitHub. Vercel auto-deploys automatically!

### Q: Can I have multiple portfolio versions?
A: Create branches: `main` (production), `dev` (testing), `experimental` (new features)

## Performance & Optimization

### Q: How do I make my portfolio faster?
A:
- Optimize images: TinyPNG.com, Squoosh.app
- Minify CSS/JS (build tools)
- Use CDN for libraries (already done)
- Enable caching
- Use lazy loading

### Q: What's a good Lighthouse score?
A: Target 90+. Vercel Analytics shows your score.

### Q: How do I check my site's performance?
A: 
1. Chrome → DevTools (F12)
2. Lighthouse tab
3. Click "Analyze page load"

### Q: Should I use Tailwind CDN or build?
A: 
- **CDN**: Easier, no build process
- **Build**: Smaller file size, better optimization

Current setup uses CDN for simplicity.

## Styling & Customization

### Q: How do I change the color scheme?
A:
1. Find the color codes (e.g., #3B82F6)
2. Use Find & Replace (Ctrl+H)
3. Replace globally with new color

### Q: Can I add custom fonts?
A: Yes! Update Google Fonts link in `<head>` of index.html

### Q: How do I modify animations?
A: Edit `assets/css/styles.css` and adjust animation duration/keyframes

### Q: Can I use Bootstrap instead of Tailwind?
A: Yes, but you'd need to rewrite all the classes. Not recommended.

### Q: How do I add a dark/light mode toggle?
A: Add JavaScript to toggle dark class and save preference to localStorage

## Functionality Issues

### Q: Contact form not sending emails?
A: Check:
1. EmailJS account is active
2. Email service is connected
3. Public Key updated in index.html
4. Service ID and Template ID correct in contact.js
5. Browser console for errors (F12 → Console)

### Q: Chatbot not responding?
A: Check:
1. `assets/js/chatbot.js` is loading (DevTools → Sources)
2. No JavaScript errors (F12 → Console)
3. Clear browser cache

### Q: Smooth scrolling not working?
A: Check:
1. `assets/js/main.js` is linked in HTML
2. Navigation links have matching `id`
3. Browser supports scroll-behavior CSS

### Q: Mobile menu stuck?
A: 
1. Refresh page
2. Clear cache (Ctrl+Shift+Delete)
3. Check `assets/js/main.js` for errors

### Q: Hover effects not working?
A: Check:
1. CSS file is loading
2. Browser supports :hover pseudo-class
3. Mobile browsers don't support hover (use touch)

## Mobile & Responsive Issues

### Q: Portfolio looks bad on mobile?
A: Check:
1. Viewport meta tag present
2. Tailwind responsive classes (md:, lg:, etc.)
3. Images are scaled properly
4. Fonts are readable

### Q: How do I test on mobile?
A: 
1. Chrome DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)
2. Test actual mobile device
3. Use BrowserStack or similar

### Q: Text too small on mobile?
A: Add responsive font sizing:
```html
<h1 class="text-2xl md:text-4xl lg:text-5xl">Title</h1>
```

### Q: Buttons don't work on mobile?
A: Ensure touch targets are at least 44x44px (accessibility standard)

## Browser Compatibility

### Q: Does this work in older browsers?
A: Works best in:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Not compatible with IE 11.

### Q: How do I add IE 11 support?
A: Use Babel transpiler. Not recommended for modern sites.

### Q: Something doesn't work in Firefox?
A: Check:
1. CSS prefixes (already included)
2. JavaScript compatibility
3. Use Firefox DevTools (F12)

## File & Folder Issues

### Q: Where do I put project images?
A: In `assets/images/` folder

### Q: Can I delete the placeholder folders?
A: No, keep folder structure for assets to load properly

### Q: How do I organize project files?
A:
```
assets/
├── css/        (stylesheets)
├── js/         (javascript)
└── images/     (pictures)
```

### Q: What if I accidentally delete a file?
A: Use Git to restore:
```bash
git checkout -- filename
```

## Performance & SEO

### Q: How do I improve SEO?
A:
1. Update meta tags
2. Add descriptive alt text
3. Use heading hierarchy (h1, h2, h3)
4. Add structured data (JSON-LD)
5. Use semantic HTML

### Q: Does Google index my portfolio?
A: Yes, if it's public. Add sitemap:
```xml
<!-- In index.html -->
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
```

### Q: How long before Google indexes my site?
A: Usually 1-2 weeks. Faster if linked from other sites.

## GitHub & Version Control

### Q: How do I commit changes?
A:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

### Q: I accidentally committed sensitive data. Help!
A:
```bash
git rm --cached .env
git commit -m "Remove sensitive data"
git push origin main
```

### Q: How do I create a backup?
A:
```bash
git clone https://github.com/USERNAME/portfolio.git backup
```

## Social & Sharing

### Q: How do I enable Open Graph for sharing?
A: Add meta tags to `<head>`:
```html
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:image" content="https://yourdomain.com/image.jpg">
```

### Q: How do I add a preview image when sharing?
A: Add Open Graph image tag (see above)

### Q: Can I add Pinterest preview?
A: Yes, same Open Graph tags work for Pinterest

## Money & Monetization

### Q: Can I charge for this portfolio template?
A: No, it's MIT licensed (free for all).

### Q: Can I use ads on my portfolio?
A: Yes, add Google AdSense code to index.html

### Q: Can I add affiliate links?
A: Yes, but disclose clearly for ethics

## Troubleshooting Checklist

**For any issue, try:**
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Hard refresh (Ctrl+F5)
- [ ] Open in incognito/private mode
- [ ] Try different browser
- [ ] Check browser console (F12 → Console)
- [ ] Check Network tab for failed requests
- [ ] Verify file paths are correct
- [ ] Check file exists in folder
- [ ] Verify all links are updated
- [ ] Test on mobile device
- [ ] Rollback last changes (git)
- [ ] Read error messages carefully

## Console Error Solutions

### "Uncaught TypeError"
- JavaScript file not loading or syntax error
- Check `assets/js/` files are linked in HTML

### "Failed to load resource"
- File path is incorrect
- File doesn't exist
- Check file paths in HTML

### "undefined is not a function"
- Script loaded before DOM ready
- Wrap code in DOMContentLoaded event

### "Fetch failed"
- Network issue
- CORS blocked
- EmailJS credentials wrong

## Still Having Issues?

### Debug Steps:

1. **Read the error**: Browser console has clues
2. **Check paths**: Verify file locations
3. **Validate code**: Use online validators
4. **Search online**: Stack Overflow, MDN docs
5. **Check documentation**: README, guides
6. **Ask for help**: GitHub Issues, communities

### Where to Get Help:

- **EmailJS Issues**: https://www.emailjs.com/docs/
- **Vercel Issues**: https://vercel.com/docs
- **CSS Issues**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript Issues**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **Tailwind Issues**: https://tailwindcss.com/docs
- **GitHub Issues**: https://docs.github.com

## 🎯 Quick Links

- 📖 [README.md](README.md) - Complete documentation
- 🚀 [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - How to deploy
- ⚡ [QUICK_START.md](QUICK_START.md) - 5-minute setup
- 🎨 [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) - Personalize your site
- 📧 [EMAILJS_SETUP.md](EMAILJS_SETUP.md) - Email setup

---

**Can't find an answer?** Open an issue on GitHub or check the documentation files! 🤝
