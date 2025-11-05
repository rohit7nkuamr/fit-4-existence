# Logo and Contact Functionality Guide

This guide explains how to update your logo and ensure contact functionality works throughout the website.

## 1. Logo Update Instructions

### Where to Place Your Logo
Place your logo image in the following directory:
```
/public/images/logo/logo.png
```

### Logo Requirements
- Format: PNG with transparency
- Shape: Preferably circular or square with rounded corners
- Size: At least 200x200 pixels (larger is better for high-resolution displays)
- Background: Transparent background is recommended
- Colors: Use your brand colors (gold and white are currently used in the site)

### How the Logo Works
The Logo component (`components/Logo.jsx`) has been updated to use your custom image. It will automatically:
- Display in the header/navbar
- Display in the footer
- Resize appropriately based on where it's used

### If Your Logo Needs Adjustments
If your logo doesn't look right with the current styling, you may need to modify the Logo.jsx component. For example:
- If your logo is not circular, remove the `rounded-full` class
- If your logo has different proportions, adjust the width and height values

## 2. Contact Functionality

### "Contact Us" Links
All "Contact Us" links throughout the website now point to the contact section (`/#contact`). This includes:
- The "Contact" link in the navigation menu
- The "Book Appointment" buttons in the header and mobile menu
- The "Contact Us" links that replaced "Learn More" in the Services section

### Book Appointment Functionality
The "Book Appointment" buttons now link directly to the contact form. These buttons appear in:
- The main navigation
- The mobile menu
- The hero section

### Contact Form
The contact form in the ContactSection component is set up to:
- Collect user information (name, email, phone, service, message)
- Validate inputs
- Show a success message after submission

### Contact Information
Your contact information is displayed in the ContactSection and Footer components:
- Phone: +91 6287811094
- Email: fit4existence@gmail.com
- Location: Gaya, Bodhgaya, Bihar, India
- Google Maps link: Links to your location on Google Maps

## 3. How to Test Contact Functionality

1. Click on any "Contact Us" or "Book Appointment" button throughout the site
2. Verify that it scrolls smoothly to the contact section
3. Fill out the contact form and submit it
4. Verify that the success message appears

## 4. Additional Notes

- The contact form currently uses a simulated submission (setTimeout) for demonstration purposes
- To connect it to a real backend or email service, you'll need to modify the `handleSubmit` function in ContactSection.jsx
- All Google Maps links point to: https://www.google.com/maps/search/fit+4+existence+physiotherapy+gaya/
