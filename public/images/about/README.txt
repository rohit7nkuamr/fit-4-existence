ABOUT SECTION IMAGES GUIDELINES

This directory should contain images for the About Us section of the Fit 4 Existence website.

RECOMMENDED IMAGES TO INCLUDE:
1. Clinic exterior - A photo of the clinic building from outside
2. Clinic interior - Photos of the reception area and waiting room
3. Treatment rooms - Photos of treatment rooms with equipment
4. Team photo - A group photo of the entire staff (if applicable)
5. Equipment - Photos of specialized physiotherapy equipment

IMAGE REQUIREMENTS:
- Size: 1200px × 800px (landscape orientation)
- Format: JPG or PNG
- Quality: High resolution but optimized for web (file size <300KB)
- Content: Clean, well-lit photos that showcase the professional environment

NAMING CONVENTION:
Use descriptive names, for example:
- clinic-exterior.jpg
- treatment-room.jpg
- physiotherapy-equipment.jpg

HOW TO REFERENCE IN CODE:
In the AboutSection.jsx file, update the image paths to point to these local images:

Example:
```jsx
<Image
  src="/images/about/clinic-interior.jpg"
  alt="Fit 4 Existence Clinic Interior"
  width={600}
  height={400}
  className="rounded-lg"
/>
```
