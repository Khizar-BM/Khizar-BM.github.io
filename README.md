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

This portfolio is designed to be easily deployed to [Vercel](https://vercel.com/):

```bash
npm run build
# or
yarn build
```

For other deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)
- [EmailJS](https://www.emailjs.com/)
