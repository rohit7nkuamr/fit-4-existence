SERVICE IMAGES GUIDELINES

This directory should contain images for all services offered by Fit 4 Existence.

RECOMMENDED SERVICES TO INCLUDE IMAGES FOR:
1. Knee Pain Treatment
2. Back Pain Treatment
3. Paralysis Rehabilitation
4. Cervical Pain Treatment
5. Cupping Therapy
6. Sciatica Treatment
7. Shoulder Pain Treatment
8. Muscle Pain Treatment

IMAGE REQUIREMENTS:
- Size: 800px × 600px (landscape orientation)
- Format: JPG or PNG
- Quality: High resolution but optimized for web (file size <200KB)
- Content: Show the treatment in progress or equipment used

NAMING CONVENTION:
Use descriptive names that match the service, for example:
- knee-pain-treatment.jpg
- back-pain-therapy.jpg
- cupping-therapy.jpg

HOW TO REFERENCE IN CODE:
In the ServicesSection.jsx file, update the image paths to point to these local images:

Example:
```jsx
{
  id: 1,
  title: "Knee Pain Treatment",
  image: "/images/services/knee-pain-treatment.jpg",
  description: "..."
}
```
