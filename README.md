# Fit 4 Existence - Medical Care Website

A modern, responsive website for Fit 4 Existence, a medical care service specializing in pain management and home visits.

## Features

- Modern, responsive design
- Service showcase
- Doctor profiles section
- Testimonials/reviews section
- Contact form
- Mobile-friendly navigation

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion for animations
- Swiper for carousels

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Run the development server
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to GitHub Pages

1. Create a GitHub repository for your project

2. Push your code to GitHub
   ```
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

3. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "GitHub Actions" as the source
   - Choose the Next.js workflow

4. Create a GitHub Actions workflow file:
   - Create a `.github/workflows/nextjs.yml` file with the appropriate configuration for Next.js deployment

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
