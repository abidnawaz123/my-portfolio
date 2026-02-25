# Abid Nawaz - Portfolio

A beautiful, modern, and responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases my work, skills, and experience as a Full-Stack Developer with over 3.5 years of experience.

## 🎨 Features

- **Beautiful UI Design**: Modern gradient backgrounds and glassmorphic effects
- **Smooth Animations**: Framer Motion animations for scroll effects and interactions
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Performance Optimized**: Built with Vite for fast build times and load speeds
- **Intersection Observer**: Smooth scroll animations triggered when sections come into view
- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS
- **SEO Ready**: Semantic HTML and optimized structure

## 🚀 Sections

1. **Hero Section**: Eye-catching landing with animated background and call-to-action buttons
2. **Navigation**: Sticky navbar with smooth scrolling and mobile menu
3. **About**: Personal introduction and key statistics
4. **Skills**: Organized skill categories with visual tags
5. **Projects**: Featured projects with technology stacks and highlights
6. **Experience**: Timeline view of professional experience
7. **Contact**: Multiple ways to get in touch
8. **Footer**: Quick links and social connections

## 🛠️ Tech Stack

**Frontend:**
- React 19 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons

**Tools:**
- Vite for fast bundling
- ESLint for code quality
- PostCSS & Autoprefixer

## 📦 Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Development

1. **Clone and install dependencies**
   ```bash
   cd my-portfolio
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:5173`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Customization

### Update Personal Information

Edit the components to add your own content:
- `src/components/Hero.tsx` - Change title and introduction
- `src/components/About.tsx` - Update bio and statistics
- `src/components/Skills.tsx` - Modify your skill categories
- `src/components/Projects.tsx` - Add/remove your projects
- `src/components/Experience.tsx` - Update work experience
- `src/components/Contact.tsx` - Update contact information

### Color Scheme

Colors are defined in `tailwind.config.js`:
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Dark**: `#0f172a` (Very Dark Blue)

Customize the gradient backgrounds in `src/index.css` with the background gradient

### Update Social Links

Replace placeholder links in all components with your actual profiles:
- GitHub
- LinkedIn
- Email
- Twitter/X

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 320px
- Tablet: 768px (md)
- Desktop: 1024px and above

## 🚀 Deployment to Vercel

### Quick Deploy

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite + React project
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Go to your project settings
   - Add your custom domain
   - Follow DNS configuration instructions

The `.nvmrc` file ensures Vercel uses Node.js 18.x for compatibility.

## 🎨 Animation Customization

All animations are defined in:
- `tailwind.config.js` - Tailwind animations
- Component files - Framer Motion animations

Adjust:
- `duration` - How long animations take (in seconds)
- `delay` - When animations start (in seconds)
- `staggerChildren` - Spacing between multiple animations

## 📊 Performance

- Optimized bundle size with Vite
- Lazy-loaded components
- CSS-in-JS with Tailwind for minimal CSS
- Typical Lighthouse Score: 95+

## 🔒 Security & Privacy

- No sensitive data is exposed
- All contact information is static
- External links open in new tabs safely
- No tracking or analytics by default

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Navigation with mobile menu
│   ├── Hero.tsx         # Landing section
│   ├── About.tsx        # About & stats
│   ├── Skills.tsx       # Skills showcase
│   ├── Projects.tsx     # Projects portfolio
│   ├── Experience.tsx   # Work experience timeline
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer with links
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app component
├── App.css              # Global styles
├── index.css            # Tailwind CSS
└── main.tsx             # Entry point
```

## 🛠️ Frontend Stack Details

- **React 19**: Latest React features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Production-grade animations
- **Lucide React**: Beautiful, consistent icons
- **React Intersection Observer**: Trigger animations on scroll

## 🐛 Troubleshooting

### Build Fails Locally
- Ensure Node.js 18+ is installed (`node --version`)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

### Animations Not Working
- Check browser console for errors
- Ensure Framer Motion is installed: `npm list framer-motion`
- Verify JavaScript is enabled

### Responsive Issues
- Test in browser DevTools (F12)
- Check mobile breakpoints in `tailwind.config.js`
- Verify viewport meta tag in `index.html`

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Abid Nawaz**

[GitHub](https://github.com/abidnawaz) | [LinkedIn](https://linkedin.com/in/abidnawaz) | [Email](mailto:abid@example.com)
