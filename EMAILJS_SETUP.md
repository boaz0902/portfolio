# EmailJS Setup Guide

## ⚠️ CRITICAL: Template Configuration
Your template variables **MUST** match the parameters sent from your code. The template should use:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Sender's message
- `{{reply_to}}` - Reply-to email address (optional)

**DO NOT use `{{to_email}}`** - The recipient email is configured in your Email Service settings, not as a template variable.

## Step 1: Create EmailJS Account
2. Click "Sign Up Free"
3. Create your account and verify email

## Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add Service"
3. Select "Gmail" (or your preferred email provider)
4. Click "Connect Account" and authorize
5. Save your Service ID (you'll need this)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save and copy your Template ID

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your "Public Key"

## Step 5: Update Your Code

### In index.html (line ~12):
```javascript
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');
```

### In assets/js/contact.js (line ~58):
```javascript
const response = await emailjs.send(
    'YOUR_SERVICE_ID',           // Your Service ID here
    'YOUR_TEMPLATE_ID',          // Your Template ID here
    {
        from_name: name,         // Sender's name
        from_email: email,       // Sender's email
        message: message,        // Message content
        reply_to: email          // Reply to sender's email (optional)
    }
);
```

## Step 6: Testing
1. Fill out the contact form on your website
2. Submit a test message
3. Check your email inbox
4. Verify you received the message

## Troubleshooting

**"Invalid Service"?**
- Check Service ID spelling in contact.js
- Verify email service is enabled in EmailJS dashboard
- Make sure the service is connected to your email provider

**No email received?**
- Check spam/promotions folder
- Verify email service is connected and active in EmailJS
- **Ensure template variables match code parameters** (critical!)
- Check that your email address is configured in the service settings

**"Invalid Template"?**
- Check Template ID spelling in contact.js
- Ensure template is published (not in draft)
- Verify template variables use correct syntax: `{{variable_name}}`

**"Public key is not valid"?**
- Update the public key in contact.js to match your EmailJS account
- Generate a new public key in EmailJS Account → API Keys

**Template variables not working?**
- Ensure template uses: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- DO NOT use `{{to_email}}` - configure recipient email in service settings
- Template variables are case-sensitive
- Variables must be surrounded by double braces: `{{variable}}`

**Rate limiting?**
- Free plan has 200 emails/month
- Check usage in EmailJS dashboard
- Upgrade plan if needed

## Security Note
- Public Key is meant to be public
- Service ID can be exposed (it's not a secret)
- Never expose your email password
- EmailJS handles security on their servers

## Support
Visit https://www.emailjs.com/docs/ for more help
