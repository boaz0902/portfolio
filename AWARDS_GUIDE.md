# Awards & Achievements Section - Documentation

## Overview

The Awards & Achievements section is a modern, interactive component for showcasing your recognitions and accomplishments. It features a responsive grid layout with glassmorphism cards and an advanced modal system for displaying award certificates with image navigation.

## Features

✅ **Dark Theme Design**
- Background: #020617
- Card Background: #0F172A
- Accent Color: #3B82F6 (Blue)
- Text Color: #E2E8F0 (Light Gray)

✅ **Responsive Layout**
- 2 columns on desktop (md screens and above)
- 1 column on mobile
- Fully responsive design

✅ **Glassmorphism Cards**
- Semi-transparent background with backdrop blur effect
- Smooth hover animations with scale and shadow effects
- Professional, modern appearance

✅ **Image Gallery Modal**
- Fullscreen lightbox-style modal with dark overlay
- Image navigation with Previous/Next buttons
- Visual indicator showing current image (e.g., "1 / 2")
- Dot indicators for quick image selection
- Smooth fade/scale animations

✅ **Keyboard Navigation**
- Arrow Left/Right: Navigate between images
- ESC: Close modal

✅ **Icon Support**
- Web Development Award: Code icon (fas fa-code)
- UI/UX Design Award: Palette icon (fas fa-palette)
- Fully customizable with Font Awesome icons

## File Structure

```
Portfolio/
├── index.html (Main HTML file with Awards section)
├── assets/
│   ├── css/
│   │   └── output.css (Contains awards-specific styles)
│   ├── js/
│   │   └── awards.js (Modal and image navigation logic)
│   └── images/
│       ├── webdev1.jfif (Web Development award certificate)
│       └── uix1.jfif (UI/UX Design award certificate)
```

## HTML Structure

The Awards section in `index.html` consists of:

1. **Section Container** - `#awards` with class `id="awards"`
2. **Section Header** - Gradient text title and subtitle
3. **Awards Grid** - Responsive grid container
4. **Award Cards** - Individual award cards with:
   - Icon container
   - Title and subtitle
   - Description text
   - Preview image
   - Image indicator dots

5. **Modal** - `#awards-modal` with:
   - Close button
   - Image display area
   - Previous/Next buttons
   - Image counter and dot indicators
   - Details section with full description
   - Overlay for clicking outside to close

## JavaScript Functionality (`assets/js/awards.js`)

### Data Structure

```javascript
const awardsData = {
    webdev: {
        title: 'Best in Web Development',
        subtitle: 'Outstanding Achievement',
        description: '...',
        images: ['path/to/image1', 'path/to/image2']
    },
    design: {
        title: 'Best in UI/UX Design',
        subtitle: 'Design Excellence',
        description: '...',
        images: ['path/to/image1', 'path/to/image2']
    }
};
```

### Key Functions

#### `initAwards()`
Initializes the Awards section by setting up event listeners.

#### `openAwardsModal(awardKey)`
Opens the modal for a specific award.
```javascript
openAwardsModal('webdev'); // Opens Web Development award modal
openAwardsModal('design');  // Opens UI/UX Design award modal
```

#### `closeAwardsModal()`
Closes the modal and restores body scroll.

#### `nextImage()`
Advances to the next image in the gallery.

#### `previousImage()`
Goes back to the previous image.

#### `goToImage(index)`
Navigates directly to a specific image index.

#### `updateModalImage()`
Updates the modal display with current image and UI state.

### Modal State

```javascript
let awardsModalState = {
    isOpen: false,           // Modal open/closed status
    currentAward: null,      // Currently displayed award key
    currentImageIndex: 0     // Current image in the gallery
};
```

## CSS Classes

### Glassmorphism Card
```css
.glassmorphism-card {
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(59, 130, 246, 0.1);
}
```

### Award Card Hover
```css
.award-card:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);
}
```

### Image Preview Zoom
```css
.award-image-preview img:hover {
    transform: scale(1.05);
}
```

## Customization Guide

### Adding New Awards

1. **Update `awardsData` in `assets/js/awards.js`:**

```javascript
const awardsData = {
    // ... existing awards ...
    newaward: {
        title: 'Your Award Title',
        subtitle: 'Your Award Subtitle',
        description: 'Full description of the award...',
        images: [
            'assets/images/certificate1.jpg',
            'assets/images/certificate2.jpg'
        ]
    }
};
```

2. **Add a new Award Card in `index.html`:**

```html
<div class="award-card group">
    <div class="glassmorphism-card rounded-2xl overflow-hidden p-8 h-full flex flex-col transition duration-300 hover:shadow-2xl hover:shadow-[#3B82F6]/20">
        <!-- Header -->
        <div class="flex items-start gap-4 mb-6">
            <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] flex items-center justify-center flex-shrink-0 shadow-lg">
                <i class="fas fa-your-icon text-2xl text-white"></i>
            </div>
            <div>
                <h3 class="text-2xl font-bold font-['Poppins'] text-white mb-2">Your Award Title</h3>
                <p class="text-[#3B82F6] font-500 text-sm">Your Subtitle</p>
            </div>
        </div>

        <!-- Description -->
        <p class="text-[#CBD5E1] mb-6 leading-relaxed flex-grow">
            Your award description...
        </p>

        <!-- Preview Image -->
        <div class="award-image-preview mb-6 cursor-pointer group/image">
            <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] aspect-video">
                <img src="assets/images/your-image.jpg" alt="Your Award" class="w-full h-full object-cover transition duration-300 transform group-hover/image:scale-110">
                <div class="absolute inset-0 bg-black/20 group-hover/image:bg-black/40 transition duration-300 flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                    <i class="fas fa-expand text-3xl text-white"></i>
                </div>
            </div>
            <p class="text-[#64748B] text-xs mt-2 text-center">Click to view certificates</p>
        </div>

        <!-- Image Indicator -->
        <div class="flex justify-center gap-2 mb-6">
            <div class="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
            <div class="w-2 h-2 rounded-full bg-[#1E293B]"></div>
        </div>
    </div>
</div>
```

### Changing Colors

**Accent Color (Blue → Custom Color):**

1. Find all instances of `#3B82F6` and replace with your color
2. Update in `index.html` and `assets/js/awards.js`

Example (changing to purple #A855F7):
```html
<!-- Change -->
<div class="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1E40AF]">
<!-- To -->
<div class="w-16 h-16 rounded-xl bg-gradient-to-br from-[#A855F7] to-[#7E22CE]">
```

### Changing Icons

Replace the Font Awesome icon class:

```html
<!-- Current -->
<i class="fas fa-code text-2xl text-white"></i>

<!-- Change to any Font Awesome icon -->
<i class="fas fa-trophy text-2xl text-white"></i>
<i class="fas fa-star text-2xl text-white"></i>
<i class="fas fa-award text-2xl text-white"></i>
```

### Adjusting Image Gallery Count

To add more than 2 images per award:

1. **Update `awardsData`:**
```javascript
images: [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg'
]
```

2. **Add more dots in HTML:**
```html
<!-- Existing -->
<div class="flex justify-center gap-2 mb-6">
    <div class="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
    <div class="w-2 h-2 rounded-full bg-[#1E293B]"></div>
</div>

<!-- Add dots -->
<div class="flex justify-center gap-2 mb-6">
    <div class="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
    <div class="w-2 h-2 rounded-full bg-[#1E293B]"></div>
    <div class="w-2 h-2 rounded-full bg-[#1E293B]"></div>
</div>
```

3. **Update modal dots in HTML:**
```html
<!-- Add more dot buttons -->
<button id="awards-modal-dot-2" class="w-3 h-3 rounded-full bg-[#1E293B] hover:bg-[#3B82F6]/50 transition-all duration-300"></button>
```

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE 11: ❌ Not supported (modern CSS required)

## Performance Tips

1. **Optimize Images**
   - Use WebP format for better compression
   - Compress JPEG/PNG files (recommended max 500KB each)
   - Use appropriate dimensions (aspect ratio 16:9 recommended)

2. **Lazy Loading**
   - Images load only when modal is opened
   - No performance impact on initial page load

3. **Animations**
   - GPU-accelerated transforms (transform, opacity)
   - Smooth 60fps animations

## Accessibility

- ✅ Keyboard navigation (Arrow keys, ESC)
- ✅ ARIA labels on buttons
- ✅ Focus states for keyboard users
- ✅ Sufficient color contrast (WCAG AA compliant)

## Troubleshooting

### Modal Not Opening
- Ensure `awards.js` is loaded after DOM
- Check browser console for JavaScript errors
- Verify image paths exist

### Images Not Displaying
- Check file paths in `awardsData`
- Verify image files exist in `assets/images/`
- Check browser network tab for 404 errors

### Styles Not Applying
- Ensure `output.css` is properly linked in `index.html`
- Check for CSS conflicts
- Verify Tailwind CSS is properly imported

### Keyboard Navigation Not Working
- Ensure modal is open
- Check if JavaScript is enabled
- Verify `awards.js` is loaded

## Integration Notes

- The Awards section integrates seamlessly with the existing portfolio
- Navigation link automatically added to navbar and mobile menu
- Uses same design system (colors, fonts, spacing)
- Compatible with existing glassmorphism cards

## Future Enhancements

Consider implementing:
- Filtering by award type
- Award dates/years
- Certificate download functionality
- Social sharing of awards
- Award statistics (number of awards received)
- Animation on scroll

## License & Credits

This Awards & Achievements component is part of your portfolio website and uses:
- Tailwind CSS for styling
- Font Awesome for icons
- Vanilla JavaScript (no dependencies)

---

For questions or customization help, refer to the main portfolio documentation.
