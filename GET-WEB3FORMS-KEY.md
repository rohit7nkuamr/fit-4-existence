# How to Get Your Web3Forms Access Key (30 seconds)

## Quick Steps:

1. **Go to**: https://web3forms.com

2. **Enter your email**: `fit4existence@gmail.com`

3. **Click**: "Create Access Key"

4. **Check your email**: You'll receive a verification email

5. **Click the verification link** in the email

6. **Copy the access key** shown on the page

7. **Replace the key** in `app/api/send-email/route.js` on line 17:
   ```javascript
   access_key: 'YOUR_NEW_KEY_HERE', // Replace this
   ```

## That's it! 

- No account creation needed
- No credit card required
- Free forever (250 emails/month)
- Emails will go directly to fit4existence@gmail.com

## Current Status:

The placeholder key in the code won't work. You need to replace it with your real key from Web3Forms.

Until then, users can still contact you via:
- ✅ Call button (works)
- ✅ WhatsApp button (works)
- ❌ Contact form (needs your Web3Forms key)
