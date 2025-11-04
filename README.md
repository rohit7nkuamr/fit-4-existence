# Fit 4 Existence - Medical Website

A modern, responsive website for Fit 4 Existence, a medical service provider specializing in pain management and personalized care.

## Features

- Modern, responsive design
- Interactive UI elements with animations
- Sections for services, about us, doctor profiles, testimonials, and contact
- Mobile-friendly navigation
- Optimized for performance

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion for animations
- Swiper for carousels

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/rohit7nkuamr/fit-4-existence.git
   cd fit-4-existence
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to GitHub Pages

### Automatic Deployment

Use the gh-pages package for easy deployment:

```bash
npm run deploy
```

This will build the site and deploy it to the gh-pages branch.

### Manual Deployment

1. Build the site
   ```bash
   npm run build
   ```

2. Create a `.nojekyll` file in the `out` directory
   ```bash
   type nul > out/.nojekyll
   ```

3. Deploy the `out` directory to GitHub Pages
   - You can use the GitHub Pages settings in your repository
   - Set the source to the gh-pages branch

## Customization

### Adding Doctor Profiles
Replace the placeholder doctor information in `components/DoctorProfilesSection.jsx` with actual doctor details and images.

### Adding Google Reviews
Replace the placeholder testimonials in `components/TestimonialsSection.jsx` with actual Google reviews.

### Adding Logo
Replace the placeholder logo in the `Navbar.jsx` component with your actual logo.

### Updating Contact Information
Update the contact information in the `ContactSection.jsx` and `Footer.jsx` components.

## License

This project is licensed under the MIT License.
