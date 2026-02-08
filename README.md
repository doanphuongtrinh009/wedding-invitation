# 💒 Premium Wedding Invitation Template

A modern, production-ready Next.js wedding invitation website with clean architecture and multi-theme support.

## ✨ Features

- 🎨 **Multi-theme Support** - Luxury, Pastel, and Traditional themes
- 📱 **Fully Responsive** - Beautiful on all devices
- ⚡ **Optimized Performance** - Built with Next.js 16 and Turbopack
- 🎵 **Background Music** - Elegant music player
- 📝 **RSVP Form** - Guest confirmation system
- 💌 **Guestbook** - Interactive message wall
- 🎁 **Gift Registry** - Bank transfer with QR codes
- 📸 **Photo Gallery** - Responsive masonry layout
- ⏰ **Countdown Timer** - Days until the wedding
- 🗺️ **Google Maps** - Embedded location map
- 🎭 **Dress Code** - Color palette guide for guests

## 📁 Project Structure

```
app/
├── api/                    # API routes
│   └── send-order/        # Order submission endpoint
├── components/
│   ├── layout/            # Layout components (Header, Footer, ThemeProvider)
│   ├── sections/          # Page sections (Hero, Story, etc.)
│   ├── shared/            # Reusable components (CountdownBoard, MusicPill)
│   └── ui/                # UI primitives (buttons, inputs, etc.)
├── features/              # Feature modules
│   ├── rsvp/             # RSVP functionality
│   ├── guestbook/        # Guestbook feature
│   ├── registry/         # Gift registry
│   ├── gallery/          # Photo gallery
│   ├── events/           # Event schedule
│   └── story/            # Love story
├── config/               # Configuration files
│   └── wedding.config.ts # Main wedding configuration
├── utils/                # Utility functions
│   └── data.ts          # Data adapter/exports
├── styles/              # Global styles
│   └── globals.css      # Main stylesheet
├── types/               # TypeScript type definitions
├── tool/                # Development tools
│   └── generator/       # Config generator UI
├── layout.tsx           # Root layout
└── page.tsx            # Main page

public/
├── couple-photo.png     # Main couple photo
├── floral-main.png      # Floral decoration
├── qr-vcb.jpg          # Bank QR code (groom)
├── qr-mb.jpg           # Bank QR code (bride)
└── music/              # Background music

docs/
└── order-toolkit/       # Business documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd wedding-invitation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your wedding data**
   
   Edit `app/config/wedding.config.ts` with your information:
   - Couple names and photos
   - Wedding date and venue
   - Events schedule
   - Love story
   - Bank information
   - Gallery photos

4. **Add your assets**
   
   Place your files in the `public/` directory:
   - `couple-photo.png` - Main couple photo
   - `qr-vcb.jpg` - Groom's bank QR code
   - `qr-mb.jpg` - Bride's bank QR code
   - `music/wedding-song.mp3` - Background music

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Changing Theme

Edit `app/config/wedding.config.ts`:

```typescript
meta: {
  theme: "luxury", // Options: "luxury", "pastel", "traditional"
  // ...
}
```

### Styling

All styles are in `app/styles/globals.css`. The design uses:
- CSS custom properties for theming
- Tailwind CSS v4 for utilities
- Google Fonts (Cormorant Garamond, Playfair Display, Manrope, Great Vibes)

### Adding New Sections

1. Create component in `app/components/sections/`
2. Import and add to `app/page.tsx`
3. Add navigation link if needed

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📝 Configuration Reference

### Wedding Config Structure

```typescript
{
  meta: {
    title: string;
    description: string;
    themeColor: string;
    theme: "luxury" | "pastel" | "traditional";
    musicUrl: string;
    seoKeywords: string;
  },
  couple: {
    groom: { name, shortName, image, description },
    bride: { name, shortName, image, description },
    coverImage: string
  },
  events: Array<{
    title, icon, time, date, location, mapLink
  }>,
  loveStory: Array<{
    date, title, description, image
  }>,
  gallery: Array<{
    id, src, alt
  }>,
  dressCode: {
    description, note, palette
  },
  bankInfo: Array<{
    id, bankName, accountNumber, accountName, branch, qrImage
  }>
}
```

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Fonts:** Google Fonts
- **Email:** Nodemailer (for order notifications)

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Clean Architecture Principles

This project follows clean architecture:

- **Separation of Concerns** - Features are isolated
- **Dependency Rule** - Dependencies point inward
- **Testability** - Components are easily testable
- **Scalability** - Easy to add new features
- **Maintainability** - Clear structure and naming

## 📄 License

This is a commercial template. All rights reserved.

## 🤝 Support

For support, email your-email@example.com or create an issue in the repository.

---

**Made with ❤️ for your special day**
