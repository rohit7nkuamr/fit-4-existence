# Pre-Deployment Checklist

Complete these tasks before deploying to Vercel:

## 1. Images ✓ / ✗

- [ ] Logo uploaded to `/public/images/logo/Logo.png`
- [ ] Doctor profile image at `/public/images/doctors/prince-raj.jpg`
- [ ] Hero image at `/public/images/hero/main-hero.jpg`
- [ ] Service images (8 images) in `/public/images/services/`
- [ ] About section image at `/public/images/about/clinic-interior.jpg`
- [ ] Gallery images (at least 8) in `/public/images/gallery/`

## 2. Social Media Links ✓ / ✗

- [ ] Update Instagram URL in `components/DoctorProfilesSection.jsx`
- [ ] Update LinkedIn URL in `components/DoctorProfilesSection.jsx`
- [ ] Update Footer social media links in `components/Footer.jsx`
- [ ] Verify WhatsApp number: +91 6287811094

## 3. Contact Information ✓ / ✗

- [ ] Phone number correct: +91 6287811094
- [ ] Email correct: fit4existence@gmail.com
- [ ] Address correct: Gaya, Bodhgaya, Bihar, India
- [ ] Google Maps link working

## 4. Web3Forms Setup ✓ / ✗

- [ ] Create account at https://web3forms.com
- [ ] Verify email: fit4existence@gmail.com
- [ ] Copy access key
- [ ] Ready to add to Vercel environment variables

## 5. Code Review ✓ / ✗

- [ ] All placeholder text replaced with real content
- [ ] All "lorem ipsum" removed
- [ ] Doctor bio and certifications accurate
- [ ] Services descriptions correct
- [ ] Testimonials are real (if any)

## 6. Testing Locally ✓ / ✗

- [ ] Run `npm run dev` and test locally
- [ ] Test contact form
- [ ] Test all navigation links
- [ ] Test call button
- [ ] Test WhatsApp button
- [ ] Test gallery page
- [ ] Test on mobile view
- [ ] Check all images load

## 7. GitHub ✓ / ✗

- [ ] All changes committed
- [ ] Pushed to main branch
- [ ] Repository is public or accessible to Vercel

## 8. Vercel Account ✓ / ✗

- [ ] Vercel account created
- [ ] Connected to GitHub
- [ ] Ready to import repository

## Quick Commands

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Commit and push
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

## After Deployment

- [ ] Test live website
- [ ] Send test email through contact form
- [ ] Verify email received at fit4existence@gmail.com
- [ ] Test all buttons and links
- [ ] Share website URL
- [ ] Update Google My Business with website URL
- [ ] Add website to social media profiles

## Important URLs

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Web3Forms**: https://web3forms.com
- **GitHub Repo**: https://github.com/rohit7nkuamr/fit-4-existence

## Need Help?

Refer to `VERCEL-DEPLOYMENT-GUIDE.md` for detailed instructions.
