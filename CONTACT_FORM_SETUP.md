# Setting Up the Contact Form with EmailJS

The contact form uses EmailJS, a service that allows you to send emails directly from client-side JavaScript without requiring a server.

## Setting Up EmailJS

1. Create an account at [EmailJS](https://www.emailjs.com/) (they have a free tier)
2. Create an Email Service (e.g., Gmail, Outlook, etc.)
3. Create an Email Template with the following template variables:
   - `name`
   - `email`
   - `subject`
   - `message`
4. Open `portfolio/src/components/contact/ContactForm.tsx`
5. Update the EmailJS configuration with your own service ID, template ID, and public key:

```tsx
await emailjs.sendForm(
  'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
  'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
  formRef.current,
  'YOUR_PUBLIC_KEY'       // Replace with your EmailJS public key
);
```

## Step-by-Step EmailJS Setup Instructions

1. **Create an EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account

2. **Connect an Email Service**
   - In your EmailJS dashboard, go to "Email Services" and click "Add New Service"
   - Select your email provider (e.g., Gmail, Outlook)
   - Follow the authentication steps to connect your email account
   - Give your service a name and save it - note down the Service ID

3. **Create an Email Template**
   - In your EmailJS dashboard, go to "Email Templates" and click "Create New Template"
   - Design your email template using the template variables:
     - `{{name}}` - Sender's name
     - `{{email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Message content
   - Save your template and note down the Template ID

4. **Get Your Public Key**
   - In your EmailJS dashboard, go to "Account" > "API Keys"
   - Copy your Public Key

5. **Update Your Code**
   - Open `portfolio/src/components/contact/ContactForm.tsx`
   - Replace the placeholder values with your actual IDs and key:
     - `YOUR_SERVICE_ID` - The Service ID from step 2
     - `YOUR_TEMPLATE_ID` - The Template ID from step 3
     - `YOUR_PUBLIC_KEY` - The Public Key from step 4

## Testing the Form

After setting up EmailJS, test your contact form by:

1. Filling out all fields in the form
2. Submitting the form
3. Checking that you receive the email with all the form data
4. Verifying that the form displays a success message after submission

You should see a success message when the email is sent successfully and an error message if something goes wrong.

## Customizing the Form

Feel free to customize the form's appearance, fields, and validation to match your specific needs:

- Add or remove form fields as needed
- Modify the styling to match your site's design
- Add additional validation if required

The contact form includes error handling, loading states, and success messages to provide a good user experience. 