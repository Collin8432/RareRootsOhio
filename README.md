# SvelteKit Boilerplate

A clean, modern SvelteKit boilerplate with TailwindCSS, TypeScript, and best practices. Perfect for starting new web projects quickly and efficiently.

## 🚀 Features

- **SvelteKit 2.x** - The latest version of SvelteKit
- **TailwindCSS 4.x** - Utility-first CSS framework
- **TypeScript** - Full TypeScript support
- **ESLint & Prettier** - Code linting and formatting
- **Modern Tooling** - Vite, Svelte 5, and latest web standards
- **Responsive Design** - Mobile-first approach
- **SEO Ready** - Built-in SEO component
- **Clean Architecture** - Well-organized folder structure

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable UI components
│   │   ├── Button.svelte   # Flexible button component
│   │   ├── Nav.svelte      # Navigation component
│   │   ├── Footer.svelte   # Footer component
│   │   └── Seo.svelte      # SEO meta tags component
│   └── utils/              # Utility functions
│       └── index.ts        # Common utility functions
├── routes/                 # SvelteKit routes
│   ├── +layout.svelte     # Root layout
│   └── +page.svelte       # Homepage
├── styles/                 # Global styles
│   └── globals.css        # Custom CSS and animations
└── app.css                # TailwindCSS imports
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download this boilerplate**
   ```bash
   git clone <your-repo-url>
   cd sveltekit-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run type checking
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Branding

1. **Update package.json**
   ```json
   {
     "name": "your-project-name",
     "description": "Your project description"
   }
   ```

2. **Update SEO component**
   - Edit `src/lib/components/Seo.svelte`
   - Change default website, title, and description

3. **Update navigation**
   - Edit `src/lib/components/Nav.svelte`
   - Modify the `navItems` array with your pages

4. **Update footer**
   - Edit `src/lib/components/Footer.svelte`
   - Change company name and links

### Styling

1. **Colors**
   - Edit `tailwind.config.js` to customize the color palette
   - The config includes a primary color scale ready to use

2. **Fonts**
   - The boilerplate uses system fonts by default
   - To add custom fonts, update `src/app.css` and `tailwind.config.js`

3. **Components**
   - All components are designed to be easily customizable
   - Use TailwindCSS classes for quick styling changes

### Adding New Pages

1. **Create a new route**
   ```bash
   # Create a new page
   touch src/routes/about/+page.svelte
   ```

2. **Add to navigation**
   ```svelte
   <!-- In src/lib/components/Nav.svelte -->
   const navItems = [
     { href: '/', label: 'Home' },
     { href: '/about', label: 'About' },
     { href: '/contact', label: 'Contact' }
   ];
   ```

## 🧩 Components

### Button Component

A flexible button component with multiple variants and sizes:

```svelte
<Button text="Click me" variant="primary" size="lg" />
<Button text="Secondary" variant="secondary" />
<Button text="Outline" variant="outline" />
```

**Props:**
- `text` - Button text
- `variant` - 'primary' | 'secondary' | 'outline'
- `size` - 'sm' | 'md' | 'lg'
- `href` - Link URL (makes it a link instead of button)
- `type` - Button type for form submissions
- `disabled` - Disable the button

### SEO Component

Handles all meta tags and SEO optimization:

```svelte
<Seo 
  title="Page Title"
  description="Page description"
  website="yourdomain.com"
  keywords="keyword1, keyword2"
/>
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The boilerplate works with any platform that supports SvelteKit:
- Netlify
- Cloudflare Pages
- Railway
- Self-hosted

## 📚 Learn More

- [SvelteKit Documentation](https://kit.svelte.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Svelte Documentation](https://svelte.dev/)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🎉**
