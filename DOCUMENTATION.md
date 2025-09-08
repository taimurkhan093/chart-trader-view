# H&S Traders Website Documentation

## 📁 Project Overview
This is a modern business website for H&S Traders, a company that deals with premium Himalayan pink salt products. The website is built using React, TypeScript, and Tailwind CSS.

## 🚀 Technologies Used
- **React**: A JavaScript library for building user interfaces
- **TypeScript**: Adds type safety to JavaScript
- **Tailwind CSS**: A utility-first CSS framework for styling
- **Vite**: Fast build tool and development server
- **Shadcn/UI**: Pre-built UI components

## 📂 Project Structure

### Root Files
- `index.html` - The main HTML file that loads our React app
- `vite.config.ts` - Configuration for the Vite build tool
- `tailwind.config.ts` - Configuration for Tailwind CSS styling
- `package.json` - Lists all the dependencies and scripts (read-only)

### 📁 src/ (Source Code)
This is where all our code lives.

#### Main Application Files
- `main.tsx` - Entry point that starts our React app
- `App.tsx` - Main app component that sets up routing and providers
- `index.css` - Global styles and design system variables

#### 📁 pages/
Contains the main pages of our website.
- `Index.tsx` - Homepage that combines all sections
- `NotFound.tsx` - 404 error page for invalid URLs

#### 📁 components/
Contains reusable pieces of our website.

**Main Sections:**
- `Header.tsx` - Top navigation bar with logo and menu
- `HeroSection.tsx` - Main banner area with company introduction
- `AboutSection.tsx` - Information about the company
- `ProductsSection.tsx` - Showcases salt products
- `MissionVision.tsx` - Company mission, vision, and founder info
- `ContactSection.tsx` - Contact form and business details
- `Footer.tsx` - Bottom section with links and info

**📁 ui/** - Pre-built UI components from Shadcn/UI
These are like building blocks for our website:
- `button.tsx` - Different button styles
- `card.tsx` - Card containers for content
- `form.tsx` - Form input components
- `toast.tsx` - Notification messages
- And many more...

#### 📁 assets/
Contains all images and media files.
- `logo.jpg` - Company logo
- `hero-salt.jpg` - Main hero image
- `facility.jpg` - Facility image
- `founder.jpg` - Founder image
- `products-showcase.jpg` - Product showcase image
- `📁 hstraders/` - Folder with specific H&S Traders images
  - Product images (bricks, edible salt, lamps, licks)
  - About section images
  - Founder photos
  - Company logo

#### 📁 hooks/
Custom React hooks (reusable logic).
- `use-toast.ts` - Logic for showing notification messages
- `use-mobile.tsx` - Detects if user is on mobile device

#### 📁 lib/
Utility functions and configurations.
- `utils.ts` - Helper functions for the app

## 🎨 How the Design System Works

### Colors & Styling
All colors are defined in `src/index.css` using CSS variables:
```css
:root {
  --primary: 220 14% 25%;     /* Main brand color */
  --secondary: 33 95% 60%;    /* Accent color */
  --background: 0 0% 100%;    /* Page background */
  /* ... and more */
}
```

### Component Structure
Each component follows this pattern:
1. **Import statements** - Bring in what we need
2. **Component function** - The main logic
3. **Return JSX** - The HTML-like structure
4. **Export** - Make it available to other files

## 🔄 How Components Work Together

```
App.tsx
└── Router
    └── Index.tsx (Homepage)
        ├── Header.tsx
        ├── HeroSection.tsx
        ├── AboutSection.tsx
        ├── ProductsSection.tsx
        ├── MissionVision.tsx
        ├── ContactSection.tsx
        └── Footer.tsx
```

## 📱 Responsive Design
The website automatically adapts to different screen sizes:
- **Desktop**: Full layout with side-by-side content
- **Tablet**: Medium-sized layout
- **Mobile**: Stacked layout with hamburger menu

## 🛠 Development Commands

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Opens the website at `http://localhost:8080`

### Build for Production
```bash
npm run build
```
Creates optimized files for deployment

## 📋 Key Features

### 1. Navigation
- Fixed header that stays at top while scrolling
- Mobile hamburger menu for small screens
- Smooth scrolling to different sections

### 2. Hero Section
- Eye-catching introduction to the company
- Key statistics and trust indicators
- Call-to-action buttons

### 3. Product Showcase
- Grid layout showing different salt products
- Product images and descriptions
- Clean card-based design

### 4. Contact Form
- Working contact form (needs backend integration)
- Business contact information
- Social media links

### 5. Animations
- Smooth fade-in effects
- Hover animations on buttons and links
- Mobile menu slide animations

## 🔧 Customization Guide

### Changing Colors
1. Open `src/index.css`
2. Modify the CSS variables under `:root`
3. Colors use HSL format (Hue, Saturation, Lightness)

### Adding New Sections
1. Create new component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Update navigation in `src/components/Header.tsx`

### Modifying Content
- **Text content**: Edit directly in component files
- **Images**: Replace files in `src/assets/` folder
- **Styling**: Use Tailwind classes or modify `index.css`

## 📞 Getting Help

### Common Issues
1. **Images not showing**: Check file paths in `src/assets/`
2. **Styles not working**: Verify Tailwind classes are correct
3. **Components not displaying**: Check import/export statements

### Learning Resources
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🚀 Deployment
The website can be deployed to various platforms:
- **Lovable**: Click "Publish" in the editor
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the build folder

---

*This documentation is designed to help beginners understand the codebase. Feel free to refer back to it as you explore and modify the project!*