# Vercel Deployment Guide for Fit 4 Existence

This guide will help you deploy your website to Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account (sign up at https://vercel.com)
3. Your code pushed to GitHub

## Step 1: Get Web3Forms Access Key

The contact form needs an access key to send emails to fit4existence@gmail.com.

1. Go to https://web3forms.com
2. Enter your email: **fit4existence@gmail.com**
3. Click "Create Access Key"
4. Check your email and verify
5. Copy the access key (you'll need this for Vercel)

## Step 2: Push Code to GitHub

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 3: Deploy to Vercel

### Option A: Using Vercel Website

1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository: `rohit7nkuamr/fit-4-existence`
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

5. Add Environment Variables:
   - Click "Environment Variables"
   - Add: `WEB3FORMS_ACCESS_KEY` = `your_access_key_from_step_1`

6. Click "Deploy"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts and add environment variable when asked
```

## Step 4: Configure Environment Variables

After deployment, you can add/edit environment variables:

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Environment Variables"
3. Add: `WEB3FORMS_ACCESS_KEY` = `your_web3forms_key`
4. Redeploy if needed

## Step 5: Update Social Media Links

Before deploying, update these links in the code:

### Doctor Social Links (components/DoctorProfilesSection.jsx)
```javascript
socials: {
  instagram: 'https://instagram.com/your_actual_handle',
  whatsapp: 'https://wa.me/916287811094',
  linkedin: 'https://linkedin.com/in/your_actual_profile'
}
```

### Footer Social Links (components/Footer.jsx)
Update the `#` placeholders with your actual social media URLs.

## Step 6: Add Images

Upload your images to the following directories:

1. **Logo**: `/public/images/logo/Logo.png`
2. **Doctor Profile**: `/public/images/doctors/prince-raj.jpg`
3. **Hero Image**: `/public/images/hero/main-hero.jpg`
4. **Services**: `/public/images/services/*.jpg`
5. **About**: `/public/images/about/clinic-interior.jpg`
6. **Gallery**: `/public/images/gallery/treatment-*.jpg`

## Step 7: Custom Domain (Optional)

To use your own domain:

1. Go to project settings on Vercel
2. Click "Domains"
3. Add your domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

## Features Implemented

✅ Gallery page for patient treatment photos
✅ Doctor social media links (Instagram, WhatsApp, LinkedIn)
✅ Direct call and WhatsApp buttons in navbar
✅ Contact form sends emails to fit4existence@gmail.com
✅ Responsive design for all devices
✅ Floating logo design
✅ Brownish-white theme throughout

## Testing After Deployment

1. **Contact Form**: Submit a test message and check fit4existence@gmail.com
2. **Call Button**: Click to verify it opens phone dialer
3. **WhatsApp Button**: Click to verify it opens WhatsApp
4. **Social Links**: Test all doctor social media links
5. **Gallery**: Verify all images load correctly
6. **Navigation**: Test all menu links work
7. **Mobile**: Test on mobile devices

## Troubleshooting

### Contact Form Not Working
- Verify WEB3FORMS_ACCESS_KEY is set in Vercel environment variables
- Check that the email is verified on Web3Forms
- Look at Vercel function logs for errors

### Images Not Loading
- Ensure images are in the correct directories
- Check file names match exactly (case-sensitive)
- Verify images are pushed to GitHub

### API Routes Not Working
- Make sure `output: 'export'` is commented out in next.config.js
- API routes don't work with static export

## Important Notes

1. **Email Service**: Uses Web3Forms (free tier: 250 emails/month)
2. **Phone Number**: +91 6287811094 (update if needed)
3. **Email**: fit4existence@gmail.com
4. **Location**: Gaya, Bodhgaya, Bihar, India

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify all environment variables are set
4. Ensure all images are uploaded

## Next Steps After Deployment

1. Test all functionality
2. Update social media links with real URLs
3. Add actual patient gallery images
4. Set up Google Analytics (optional)
5. Submit sitemap to Google Search Console
6. Share your website URL!

Your website will be live at: `https://your-project-name.vercel.app`
