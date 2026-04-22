# 🎨 Customization Guide

Complete guide to personalizing your portfolio to reflect your unique brand.

## 🎯 Content Customization

### Personal Information

1. **Name**: Replace all instances of "Obed"
   - HTML title tag
   - Navbar logo
   - Hero section
   - Footer

2. **Title**: Update "Junior Full Stack Developer"
   - Hero section
   - Meta tags

3. **Bio**: Edit about section with your story
   - Education background
   - Career journey
   - Personal achievements

### Skills Section

Update skills to match your expertise:

```html
<!-- In skills section -->
<span class="badge">YOUR_SKILL</span>
```

Add/remove skills:
- Frontend: HTML5, CSS3, JavaScript, React, Vue
- Backend: PHP, Node.js, Python, Java, C#
- Databases: MySQL, PostgreSQL, MongoDB, Firebase
- Tools: Git, Docker, AWS, Firebase, Git

### Projects Section

Update with your own projects:

**Template:**
```html
<div class="project-card">
    <div class="project-image"><!-- Your project image --></div>
    <h3>Project Title</h3>
    <p>Professional description</p>
    <div class="tech-stack">
        <span>Tech1</span>
        <span>Tech2</span>
    </div>
    <a href="project-link" target="_blank">View Project</a>
</div>
```

**Add more projects:**
1. Duplicate project card
2. Update title, description, tech stack
3. Add project link
4. Add project image

### Contact & Social Links

Update in footer:
```html
<a href="https://github.com/YOUR_USERNAME">GitHub</a>
<a href="https://linkedin.com/in/YOUR_PROFILE">LinkedIn</a>
<a href="mailto:your-email@example.com">Email</a>
```

## 🎨 Visual Customization

### Color Scheme

#### Option 1: Use Existing Colors
Current palette:
- Primary: `#3B82F6` (Blue)
- Background: `#020617` (Dark)
- Secondary: `#1E293B` (Dark Blue)
- Text: `#E2E8F0` (Light)

#### Option 2: Create New Color Palette

Popular color combinations:
- **Purple Theme**: `#8B5CF6` (primary)
- **Green Theme**: `#10B981` (primary)
- **Orange Theme**: `#F97316` (primary)
- **Pink Theme**: `#EC4899` (primary)

To change colors:

1. **Find all color references:**
   - Search `#3B82F6` in HTML (primary)
   - Search `#020617` in HTML (background)
   - Search in CSS file

2. **Replace globally:**
   - Find: `#3B82F6`
   - Replace: `#YOUR_NEW_COLOR`

3. **Update Tailwind config:**
   ```javascript
   theme: {
       extend: {
           colors: {
               primary: '#YOUR_NEW_COLOR',
           }
       }
   }
   ```

### Typography

#### Change Fonts

1. **Update Google Fonts link** in `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=HEADING_FONT:wght@600;700;800&family=BODY_FONT:wght@400;500;600&display=swap">
   ```

2. **Update font-family in CSS:**
   ```css
   .font-headings { font-family: 'YOUR_HEADING_FONT'; }
   .font-body { font-family: 'YOUR_BODY_FONT'; }
   ```

Popular font combinations:
- **Professional**: Playfair Display + Inter
- **Modern**: Space Grotesk + Outfit
- **Creative**: Fredoka + Work Sans
- **Elegant**: Bodoni Moda + Lato

#### Recommended Font Pairings:

| Heading | Body | Style |
|---------|------|-------|
| Poppins | Inter | Modern (Current) |
| Playfair Display | Lato | Elegant |
| Space Grotesk | Outfit | Bold |
| Fredoka | Work Sans | Creative |
| Abril Fatface | Open Sans | Artistic |

### Images & Media

#### Add Profile Picture

1. Create a square image (500x500px minimum)
2. Place in `assets/images/profile.jpg`
3. Add to HTML:
   ```html
   <img src="assets/images/profile.jpg" alt="Your Name" class="rounded-full w-32 h-32">
   ```

#### Add Project Screenshots

1. Capture project screenshots (1200x600px)
2. Save in `assets/images/`
3. Update project cards:
   ```html
   <img src="assets/images/project-1.jpg" alt="Project name">
   ```

#### Image Optimization

```bash
# Compress images (install imagemin first)
npx imagemin assets/images/* --out-dir=assets/images

# Online tools:
# - TinyPNG.com
# - Squoosh.app
# - ImageOptim
```

## 🎯 Layout Customization

### Hide Sections

Comment out sections you don't need:
```html
<!-- <section id="projects">...</section> -->
```

### Reorder Sections

Move sections around in HTML:
1. Cut section code
2. Paste in new location
3. Update navbar navigation links

### Add New Sections

Template:
```html
<section id="section-name" class="py-20 px-4 bg-[#020617]">
    <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold font-['Poppins'] mb-12">Section Title</h2>
        <!-- Your content -->
    </div>
</section>
```

## ✨ Animation Customization

### Duration

In `assets/css/styles.css`:
```css
@keyframes fadeInUp {
    /* Duration controlled here */
    animation: fadeInUp 0.8s ease forwards;  /* Change 0.8s */
}
```

### Animation Types

Available animations:
- `fadeInDown` - Fade down
- `fadeInUp` - Fade up
- `slideInLeft` - Slide from left
- `scaleIn` - Scale up
- `bounce-custom` - Bounce

### Add New Animations

```css
@keyframes rotateIn {
    from { transform: rotate(-90deg); opacity: 0; }
    to { transform: rotate(0deg); opacity: 1; }
}

.animate-rotate-in {
    animation: rotateIn 0.8s ease forwards;
}
```

Then use in HTML:
```html
<div class="animate-rotate-in">Content</div>
```

## 🔧 Advanced Customization

### Modify Chatbot Responses

In `assets/js/chatbot.js`:
```javascript
function generateBotResponse(userMessage) {
    const message = userMessage.toLowerCase();

    if (message.includes('keyword')) {
        return "Your custom response";
    }
}
```

### Change Form Validation

In `assets/js/contact.js`:
```javascript
// Add custom validation
if (message.length < 10) {
    showMessage('Message too short', 'error');
    return;
}
```

### Modify Navigation Links

In `index.html` navbar:
```html
<a href="#section-id">Section Name</a>
```

## 📱 Responsive Customization

### Breakpoints

Tailwind uses these breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Responsive Classes

```html
<!-- Hidden on mobile, shown on desktop -->
<div class="hidden md:block">Desktop only</div>

<!-- Smaller on mobile, larger on desktop -->
<h1 class="text-2xl md:text-4xl lg:text-5xl">Title</h1>

<!-- Different layout on mobile -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <!-- Content -->
</div>
```

## 🎓 SEO Customization

### Meta Tags

Update in `index.html` head:
```html
<meta name="description" content="Your unique description">
<meta name="keywords" content="portfolio, developer, skills">
<meta name="author" content="Your Name">
```

### Open Graph Tags

```html
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yourdomain.com/image.jpg">
<meta property="og:url" content="https://yourdomain.com">
```

### Structured Data

Add JSON-LD schema:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Full Stack Developer",
  "url": "https://yourdomain.com"
}
</script>
```

## 🔐 Accessibility Customization

### Add Alt Text to Images

```html
<img src="image.jpg" alt="Descriptive text about image">
```

### Improve Color Contrast

Test with: https://webaim.org/contrast/checker

### Add ARIA Labels

```html
<button aria-label="Open menu">
    <i class="fas fa-bars"></i>
</button>
```

## 📊 Analytics Customization

### Google Analytics

```html
<!-- Add to <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Track Custom Events

```javascript
gtag('event', 'project_viewed', {
    'project_name': 'My Project'
});
```

## 🎯 Branding Customization

### Favicon

1. Create 32x32px PNG image
2. Save as `favicon.ico` in root
3. Add to HTML:
   ```html
   <link rel="icon" type="image/x-icon" href="favicon.ico">
   ```

### Custom Font Logo

Replace "Obed" in navbar:
```html
<!-- Instead of text logo, add image -->
<img src="assets/images/logo.png" alt="Logo" class="h-8">
```

## 🚀 Performance Customization

### Lazy Loading Images

```html
<img src="image.jpg" alt="Description" loading="lazy">
```

### Preload Critical Assets

```html
<link rel="preload" href="assets/fonts/poppins.woff2" as="font" type="font/woff2" crossorigin>
```

### Minify CSS

```bash
npm install -g cssnano-cli
cssnano assets/css/styles.css -o assets/css/styles.min.css
```

## 📋 Customization Checklist

- [ ] Update personal information
- [ ] Set color palette
- [ ] Change fonts
- [ ] Add profile image
- [ ] Update projects
- [ ] Customize chatbot responses
- [ ] Set up analytics
- [ ] Add custom domain
- [ ] SEO optimization
- [ ] Accessibility review
- [ ] Performance audit
- [ ] Mobile testing

## 💡 Pro Tips

1. **Test Everything**: Check all links and forms work
2. **Mobile First**: Always test on mobile
3. **Performance**: Keep images optimized
4. **Backup**: Commit changes regularly to Git
5. **Analytics**: Monitor user behavior
6. **Updates**: Keep content fresh
7. **Consistency**: Maintain visual consistency
8. **Brand**: Reflect your personality

## 🎨 Design Inspiration

- Dribbble.com
- Behance.net
- Awwwards.com
- CodePen.io
- Pinterest.com

---

**Remember**: Your portfolio is a reflection of your brand. Make it unique and professional! 💼
