HERO SECTION IMAGES GUIDELINES

This directory should contain large banner images for the homepage hero section of the Fit 4 Existence website.

RECOMMENDED IMAGES TO INCLUDE:
1. Main hero image - A high-quality image showing a physiotherapist treating a patient
2. Secondary hero images - Additional treatment scenes that can be used for rotation or different sections

IMAGE REQUIREMENTS:
- Size: 1920px × 1080px (16:9 ratio) for full-width hero images
- Format: JPG or PNG
- Quality: High resolution but optimized for web (file size <500KB)
- Content: Professional images that convey trust and expertise

NAMING CONVENTION:
Use descriptive names, for example:
- main-hero.jpg
- physiotherapy-session.jpg
- patient-care.jpg

HOW TO REFERENCE IN CODE:
In the HeroSection.jsx file, update the image path to point to your local hero image:

Example:
```jsx
<Image
  src="/images/hero/main-hero.jpg"
  alt="Fit 4 Existence Physiotherapy"
  fill
  style={{ objectFit: 'cover' }}
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

CURRENT USAGE:
Currently, the HeroSection.jsx file uses an external image URL. Replace this with your local image path.
