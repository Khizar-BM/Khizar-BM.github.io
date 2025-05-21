# Modern Portfolio Website

A sleek, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases projects, skills, and provides a functional contact form integrated with EmailJS.

![Portfolio Screenshot](https://placehold.co/1200x630/111827/FFFFFF?text=Modern+Portfolio+Website)

## Features

- **Modern UI Design**: Clean, responsive interface with smooth animations
- **Dark/Light Mode**: Theme switching with system preference detection
- **Project Showcase**: Display your projects with detailed information
- **Skills Section**: Showcase your technical expertise and competencies  
- **Functional Contact Form**: Integrated with EmailJS for hassle-free form submission
- **Framer Motion Animations**: Smooth, engaging user experience with animated UI elements
- **Responsive Design**: Looks great on all devices from mobile to desktop
- **SEO Optimized**: Built with Next.js best practices for search engine visibility

## Tech Stack

- **Frontend Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [EmailJS](https://www.emailjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact Form Setup

The contact form uses EmailJS to handle form submissions directly from the client side. To set it up:

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Set up an email service and template
3. Replace the following values in `src/components/contact/ContactForm.tsx`:
   - Your EmailJS service ID
   - Your EmailJS template ID
   - Your EmailJS public key

For detailed setup instructions, check the [CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md) file.

## Customization

### Content

- **Projects**: Edit the project data in the components
- **Skills**: Modify the skills sections to match your expertise
- **Personal Info**: Update personal information throughout the site

### Styling

- **Colors**: Tailwind CSS theme in `tailwind.config.js`
- **Fonts**: Font configuration in `src/app/layout.tsx`
- **Layout**: Component structure in `src/components`

## Deployment

### Deploy to Vercel

This portfolio is designed to be easily deployed to [Vercel](https://vercel.com/):

```bash
npm run build
# or
yarn build
```

For other deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Deploy to GitHub Pages

To deploy this portfolio to GitHub Pages at the root domain:

1. **Update the next.config.mjs file**:
   ```javascript
   // next.config.mjs
   const nextConfig = {
     output: 'export',
     // No basePath for root deployment
     images: {
       unoptimized: true,
     },
   };
   
   export default nextConfig;
   ```

2. **Choose one of these methods to deploy to root**:

   **Option 1: Use your username repository**
   - Create a repository named exactly `yourusername.github.io` 
   - This special repository will automatically be served from the root
   - Your site will be available at `https://yourusername.github.io/`

   **Option 2: Configure a custom domain**
   - In your repository's Settings > Pages:
     - Add your custom domain (e.g., `example.com`)
     - Update your DNS provider with GitHub Pages' IP addresses
   - Your site will be available at your custom domain

3. **Add GitHub Actions Workflow**:
   - Create a `.github/workflows/deploy.yml` file in your project:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ["main"]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3
         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: "18"
             cache: 'npm'
         - name: Setup Pages
           uses: actions/configure-pages@v3
         - name: Install dependencies
           run: npm ci
         - name: Build with Next.js
           run: npm run build
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: ./out

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Select "GitHub Actions" as the source
   - Your site will be available at the root of your GitHub Pages URL

5. **Push your changes**:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages root deployment"
   git push
   ```

Once the GitHub Action completes, your portfolio will be available at the root of your GitHub Pages URL.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)
- [EmailJS](https://www.emailjs.com/)
