# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

## 1️⃣ Install Dependencies (1 minute)

```bash
npm install
```

## 2️⃣ Update Your Information (2 minutes)

### A. Update Your Name
Search and replace "Obed" with your name in `index.html`

### B. Update Social Links
In `index.html`, find the footer and update:
- GitHub URL (line ~360)
- LinkedIn URL (line ~365)
- Email address (line ~370)

### C. Update Contact Email
In `assets/js/contact.js`, line 97:
```javascript
to_email: 'your-email@example.com',  // Change this
```

## 3️⃣ Set Up EmailJS (1 minute)

1. Go to https://www.emailjs.com
2. Sign up (free)
3. Add Gmail service and create email template
4. Copy your:
   - Public Key
   - Service ID
   - Template ID

5. Update `index.html` line 12:
   ```javascript
   emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');
   ```

6. Update `assets/js/contact.js` lines 95-99:
   ```javascript
   const response = await emailjs.send(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       {
           to_email: 'your-email@example.com',
   ```

## 4️⃣ Test Locally (1 minute)

```bash
# Build Tailwind
npm run build

# Or watch for changes
npm run dev
```

Then open `index.html` in your browser and test:
- ✅ Navigation works
- ✅ Smooth scrolling
- ✅ Chatbot opens
- ✅ Contact form submits
- ✅ Mobile responsive

## 5️⃣ Deploy to Vercel (Automated)

### Option A: Push to GitHub & Connect to Vercel

```bash
# Initialize Git
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Then:
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables
5. Click "Deploy"

### Option B: Deploy Directly with Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

**Done!** Your portfolio is now live! 🎉

## 📝 Customization Checklist

- [ ] Update your name throughout the site
- [ ] Add your social media links
- [ ] Update project descriptions
- [ ] Set up EmailJS with your credentials
- [ ] Update your contact email
- [ ] Change color scheme if desired
- [ ] Add your profile image
- [ ] Test contact form
- [ ] Deploy to Vercel

## 🎨 Optional Customizations

### Change Colors
Edit these in `index.html` or `tailwind.config.js`:
- Primary: `#3B82F6` (blue)
- Background: `#020617` (dark)

### Change Fonts
In `index.html` head, modify Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap">
```

### Add Project Images
1. Create image file in `assets/images/`
2. Update project card in `index.html`
3. Replace placeholder icon with actual image

## 🆘 Troubleshooting

**EmailJS not working?**
- Check Public Key is correct
- Verify Service ID and Template ID
- Ensure email service is connected in EmailJS

**Styles not loading?**
- Run `npm run build`
- Clear browser cache (Ctrl+Shift+Delete)
- Check Tailwind is installed

**Mobile menu not working?**
- Check `assets/js/main.js` is loaded
- Open browser console for errors

**Contact form error?**
- Open browser DevTools → Console
- Check for error messages
- Verify all EmailJS credentials

## 📞 Need Help?

- **General Questions**: Check README.md
- **EmailJS Setup**: See EMAILJS_SETUP.md
- **Deployment**: See DEPLOYMENT_GUIDE.md
- **Code Issues**: Check browser console (F12)

## 🚀 Next Steps

After deployment:

1. Share portfolio URL with friends
2. Add portfolio link to resume
3. Update social media with your portfolio
4. Keep content fresh with new projects
5. Monitor Vercel analytics

## 📊 Performance Check

Use Lighthouse (DevTools → Lighthouse):
- Target: 90+ score
- Fix any issues
- Redeploy for updates

## 🎯 Final Checklist

- [ ] Website loads fast
- [ ] Mobile responsive
- [ ] Contact form works
- [ ] Chatbot responds
- [ ] Links working
- [ ] No console errors
- [ ] Professional appearance
- [ ] Live on Vercel

---

**You're all set!** Your portfolio is ready to impress! 💪

Need more details? Check the other guides in your project folder.
