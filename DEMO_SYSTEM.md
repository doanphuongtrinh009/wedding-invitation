# 🎨 DEMO SYSTEM DOCUMENTATION

## Overview

The demo system allows you to showcase all 5 template variants with live, interactive previews.

---

## 📍 Demo URLs

### Main Demo Landing Page
```
http://localhost:3000/demo
```

Shows all 5 template variants with:
- Visual preview cards
- Template descriptions
- Color palettes
- Section counts
- Links to live demos

### Individual Template Demos

1. **Luxury Template**
   ```
   http://localhost:3000/demo/luxury
   ```
   - Gold accents, premium typography
   - Photo collage hero
   - Elegant design

2. **Minimal Template**
   ```
   http://localhost:3000/demo/minimal
   ```
   - Clean, simple design
   - Content-focused
   - Modern aesthetic

3. **Romantic Template**
   ```
   http://localhost:3000/demo/romantic
   ```
   - Soft pastels
   - Floral elements
   - Traditional romantic

4. **Modern Template**
   ```
   http://localhost:3000/demo/modern
   ```
   - Bold typography
   - Contemporary design
   - Young professional vibe

5. **Traditional Template**
   ```
   http://localhost:3000/demo/traditional
   ```
   - Red & gold colors
   - Classic design
   - Cultural weddings

---

## 🎯 Features

### Demo Landing Page (`/demo`)

- **Template Grid**: Visual cards for all variants
- **Color Preview**: Shows theme colors for each variant
- **Section Count**: Displays number of included sections
- **Feature Highlights**: Lists key features
- **Quick Navigation**: Links to individual demos

### Individual Demo Pages (`/demo/[variant]`)

- **Demo Banner**: Sticky banner showing current template
- **Full Site Preview**: Complete wedding website with all sections
- **Live Components**: All interactive features working
- **Theme Applied**: Variant-specific colors and styling
- **Navigation**: Easy switching between variants

---

## 🛠️ Technical Implementation

### File Structure

```
app/demo/
├── page.tsx                    # Landing page (all templates)
└── [variant]/
    └── page.tsx                # Individual template demo
```

### Dynamic Routes

The system uses Next.js dynamic routes to generate pages for each variant:

```typescript
export async function generateStaticParams() {
  return [
    { variant: "luxury" },
    { variant: "minimal" },
    { variant: "romantic" },
    { variant: "modern" },
    { variant: "traditional" },
  ];
}
```

### Demo Data

Each demo uses sample data defined in the page:

```typescript
const DEMO_DATA = {
  couple: { ... },
  weddingDate: "2026-06-15T14:00:00",
  events: [...],
  loveStory: [...],
  photos: [...],
  dressCode: { ... },
};
```

### Theme Switching

Variants apply their theme via CSS custom properties:

```css
[data-variant="luxury"] {
  --color-primary: #2f2922;
  --color-accent: #b58a57;
  --color-text: #4d4338;
  --background: #f7f1e7;
}
```

---

## 📸 Creating Screenshots

### For Marketing

1. **Open each demo page**
   ```bash
   # Luxury
   open http://localhost:3000/demo/luxury
   
   # Minimal
   open http://localhost:3000/demo/minimal
   
   # etc...
   ```

2. **Take full-page screenshots**
   - Use browser dev tools
   - Or use a tool like:
     - [Full Page Screen Capture](https://chrome.google.com/webstore)
     - [GoFullPage](https://gofullpage.com/)
     - Playwright/Puppeteer for automation

3. **Recommended sizes**
   - Hero image: 1920x1080px
   - Template card: 800x600px
   - Mobile preview: 375x812px

### Automated Screenshots

Create a script to capture all variants:

```javascript
// scripts/capture-screenshots.js
const puppeteer = require('puppeteer');

const variants = ['luxury', 'minimal', 'romantic', 'modern', 'traditional'];

(async () => {
  const browser = await puppeteer.launch();
  
  for (const variant of variants) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(`http://localhost:3000/demo/${variant}`);
    await page.screenshot({ 
      path: `screenshots/${variant}.png`,
      fullPage: true 
    });
  }
  
  await browser.close();
})();
```

---

## 🎬 Creating Demo Videos

### Quick Demo Video (30-60 seconds)

1. **Record screen** while navigating through:
   - Landing page
   - Click on a template
   - Scroll through sections
   - Show interactive features (RSVP, guestbook)

2. **Tools**:
   - macOS: QuickTime, ScreenFlow
   - Windows: OBS Studio
   - Online: Loom, Screencast-O-Matic

3. **Export settings**:
   - Resolution: 1920x1080
   - Format: MP4 (H.264)
   - Frame rate: 30fps

### Full Template Walkthrough (2-5 minutes)

For each variant:
1. Show hero section
2. Demonstrate countdown
3. Scroll through story
4. Show gallery
5. Fill out RSVP form
6. Leave guestbook message
7. Show mobile responsiveness

---

## 🚀 Deployment

### Deploy Demo Site

```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Your demo will be at:
# https://your-project.vercel.app/demo
```

### Custom Domain for Demos

```bash
# Add custom domain in Vercel dashboard
# demos.yourweddingtemplate.com
```

### Environment Variables

No special env vars needed for demos - they use static sample data.

---

## 💡 Usage Scenarios

### 1. Template Marketplace Listing

Use demo URLs in your:
- ThemeForest preview
- Creative Market listing
- Product Hunt launch
- Social media posts

### 2. Client Presentations

Show clients:
```
"Here are 5 different styles you can choose from:
Visit: https://yoursite.com/demo"
```

### 3. A/B Testing

Test which variant converts best:
- Track analytics per variant
- See which gets most RSVP submissions
- Measure time on page

### 4. Development Reference

Use as reference when:
- Building new sections
- Testing responsive design
- Debugging layout issues

---

## 🎨 Customization

### Adding New Variants

1. **Add to template system**
   ```typescript
   // app/config/template.system.ts
   export const templateVariants = {
     // ... existing variants
     elegant: {
       id: "elegant-classic",
       name: "Elegant Classic",
       variant: "elegant",
       // ... configuration
     }
   };
   ```

2. **Add to static params**
   ```typescript
   // app/demo/[variant]/page.tsx
   export async function generateStaticParams() {
     return [
       // ... existing variants
       { variant: "elegant" },
     ];
   }
   ```

3. **Add theme styles**
   ```css
   [data-variant="elegant"] {
     --color-primary: #...;
     --color-accent: #...;
   }
   ```

### Customizing Demo Data

Edit the `DEMO_DATA` object in `/app/demo/[variant]/page.tsx`:

```typescript
const DEMO_DATA = {
  couple: {
    groom: { name: "Your Name", shortName: "Name" },
    bride: { name: "Partner Name", shortName: "Partner" },
    // ...
  },
  // ... rest of data
};
```

### Adding Demo Features

To showcase new features:

1. Add to demo data
2. Import component
3. Add to page layout
4. Update feature list on landing page

---

## 📊 Analytics

### Track Demo Performance

Add analytics to track:
- Page views per variant
- Time spent on each demo
- RSVP form submissions (demo mode)
- Click-through rates

### Google Analytics Example

```typescript
// app/demo/[variant]/page.tsx
useEffect(() => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'demo_view', {
      template_variant: variant,
    });
  }
}, [variant]);
```

---

## 🐛 Troubleshooting

### Demo page not loading

1. Check dev server is running
2. Verify variant name is correct
3. Check browser console for errors

### Styles not applying

1. Verify CSS custom properties are set
2. Check `data-variant` attribute is present
3. Clear browser cache

### Images not showing

1. Ensure images exist in `/public`
2. Check image paths are correct
3. Verify Next.js Image component props

---

## ✅ Checklist for Launch

Before launching demos publicly:

- [ ] All 5 variants load correctly
- [ ] Mobile responsive on all variants
- [ ] All interactive features work
- [ ] Images load properly
- [ ] Forms submit (even in demo mode)
- [ ] Navigation works smoothly
- [ ] Performance is optimized
- [ ] SEO meta tags added
- [ ] Analytics tracking setup
- [ ] Screenshots captured
- [ ] Demo video recorded
- [ ] Documentation complete

---

## 🎯 Next Steps

1. **Capture professional screenshots**
2. **Record demo videos**
3. **Deploy to production**
4. **Share demo links**
5. **Gather feedback**
6. **Iterate and improve**

---

**Your demo system is ready to showcase! 🎉**

Visit `/demo` to see all templates in action.
