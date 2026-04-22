# 💼 IT Portfolio Website

A modern, responsive IT portfolio website built with HTML, Tailwind CSS, and JavaScript. Perfect for showcasing your full-stack development skills with a clean, minimal, and professional UI/UX design.

## ✨ Features

- **🎨 Modern Dark Theme** - Sleek dark mode design with glassmorphism effects
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **⚡ Smooth Animations** - Engaging scroll animations and transitions
- **💬 AI Chatbot** - Floating chatbot for instant visitor interactions
- **📧 Contact Form** - EmailJS integration for seamless email notifications
- **🎯 Project Showcase** - Beautiful card layout for featured projects
- **🚀 Vercel Ready** - Optimized for deployment on Vercel

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Tailwind CSS
- **Fonts**: Poppins (headings), Inter (body)
- **Icons**: Font Awesome 6.4
- **Email Service**: EmailJS
- **Deployment**: Vercel

## 📂 Project Structure

```
portfolio/
├── index.html                 # Main HTML file
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── vercel.json               # Vercel deployment config
├── .gitignore               # Git ignore file
│
├── assets/
│   ├── css/
│   │   └── styles.css       # Custom styles & animations
│   │
│   ├── js/
│   │   ├── main.js          # Core navigation & scroll logic
│   │   ├── chatbot.js       # Chatbot functionality
│   │   └── contact.js       # Contact form & EmailJS
│   │
│   └── images/              # Project images (placeholder)
│
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed
- Git installed
- EmailJS account (for contact form)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Sign up for a free account
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Copy your:
     - Public Key
     - Service ID
     - Template ID

4. **Update EmailJS credentials**
   
   **In `index.html` (line 12):**
   ```javascript
   emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');
   ```
   
   **In `assets/js/contact.js` (lines 95-99):**
   ```javascript
   const response = await emailjs.send(
       'YOUR_SERVICE_ID',      // Replace this
       'YOUR_TEMPLATE_ID',     // Replace this
       {
           to_email: 'your-email@example.com', // Replace this
   ```

5. **Update personal information**
   
   - **Name**: Change "Obed" throughout the HTML
   - **Social Links**: Update GitHub and LinkedIn URLs in the footer
   - **Contact Email**: Update email in the contact form
   - **Project Links**: Update project URLs as needed

### Development

Run the development server:
```bash
npm run dev
```

Build Tailwind CSS:
```bash
npx tailwindcss -i assets/css/input.css -o assets/css/output.css --watch
```

### Local Testing

1. Open `index.html` in your browser
2. Test all sections and interactions
3. Verify EmailJS is working with the contact form
4. Test chatbot responses
5. Check mobile responsiveness

## 📋 Customization

### Color Palette

Edit colors in `tailwind.config.js` or directly in the HTML:
- **Background**: `#020617`
- **Cards**: `#0F172A`
- **Secondary**: `#1E293B`
- **Accent**: `#3B82F6`
- **Text**: `#E2E8F0`

### Fonts

Change fonts in `index.html`:
- **Headings**: Poppins (modify Google Fonts link)
- **Body**: Inter (modify Google Fonts link)

### Content

- Update **About Section** with your bio
- Modify **Skills** badges with your technologies
- Update **Projects** with your own work
- Change **Social Links** in footer

## 🚀 Deployment on Vercel

### Option 1: Deploy via Git (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"
   - Vercel will auto-detect settings

3. **Add Environment Variables** (in Vercel Dashboard)
   - Go to Project Settings → Environment Variables
   - Add:
     ```
     EMAILJS_PUBLIC_KEY=your_public_key
     EMAILJS_SERVICE_ID=your_service_id
     EMAILJS_TEMPLATE_ID=your_template_id
     ```

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 📧 EmailJS Setup Guide

### Step-by-step:

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add email service (Gmail recommended):
   - Click "Add Service"
   - Select "Gmail"
   - Connect your Gmail account
3. Create email template:
   - Click "Create Template"
   - Use these variables in template:
     ```
     From: {{from_name}} ({{from_email}})
     Message: {{message}}
     ```
4. Copy your credentials:
   - Public Key: Account → API Keys
   - Service ID: Email Services → Gmail
   - Template ID: Email Templates

## 🎨 UI/UX Highlights

- **Glassmorphism**: Frosted glass effect on cards
- **Smooth Scrolling**: Easy navigation between sections
- **Hover Effects**: Interactive animations on buttons and cards
- **Responsive Grid**: Adapts to all screen sizes
- **Dark Theme**: Easy on the eyes with modern aesthetic
- **Loading States**: Feedback on form submission

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security Notes

- Never commit `.env` files with real credentials
- Use Vercel Environment Variables for sensitive data
- EmailJS keys are meant to be public (use proper security rules)
- Keep dependencies updated regularly

## 🐛 Troubleshooting

### Contact form not working?
- Check EmailJS Public Key in `index.html`
- Verify Service ID and Template ID in `assets/js/contact.js`
- Check browser console for error messages
- Ensure email service is active in EmailJS dashboard

### Chatbot not responding?
- Check browser console for JavaScript errors
- Verify `assets/js/chatbot.js` is loaded
- Clear browser cache and reload

### Animations not working?
- Check if Tailwind CSS is loaded properly
- Verify `assets/css/styles.css` is linked
- Check for CSS conflicts

### Styling issues?
- Run `npm install` to ensure all dependencies installed
- Build Tailwind: `npx tailwindcss build`
- Clear browser cache (Ctrl+Shift+Delete)

## 📈 Performance Tips

- Optimize project images to < 500KB
- Use WebP format for images when possible
- Minify CSS and JavaScript in production
- Enable Gzip compression on Vercel (automatic)
- Use CDN for external libraries (already done)

## 🔄 Updates & Maintenance

- Update project descriptions quarterly
- Add new projects as you complete them
- Keep dependencies updated: `npm update`
- Monitor Vercel analytics for performance

## 📞 Support

For EmailJS issues: [EmailJS Support](https://www.emailjs.com/docs/)
For Vercel issues: [Vercel Documentation](https://vercel.com/docs)

## 📄 License

This project is open source and available under the MIT License.

## ✅ Pre-Launch Checklist

- [ ] Replace "Obed" with your name
- [ ] Update social media links
- [ ] Add profile image (if desired)
- [ ] Set up EmailJS credentials
- [ ] Update project descriptions
- [ ] Test contact form
- [ ] Test chatbot
- [ ] Mobile responsiveness check
- [ ] Lighthouse performance check
- [ ] Deploy to Vercel

## 🎉 You're Ready!

Your portfolio is now ready to showcase your skills to the world. Good luck! 🚀

---

**Questions or suggestions?** Feel free to contribute or reach out!
#   p o r t f o l i o  
 