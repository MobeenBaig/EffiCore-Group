# Backend Email Server Setup

## Instructions

### 1. Get Gmail App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Factor Authentication** if not already enabled
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select **Mail** and **Windows App**
5. Copy the 16-character password

### 2. Update `.env` File
```
EMAIL_USER=mobeenbaig011@gmail.com
EMAIL_PASSWORD=paste_your_16_char_password_here
RECIPIENT_EMAIL=mobeenbaig011@gmail.com
PORT=5000
```

### 3. Start the Server
```bash
node server/server.js
```

You should see:
```
🚀 Server running on http://localhost:5000
📧 Email endpoint: POST http://localhost:5000/api/contact
✅ Email service ready
```

### 4. Test the Endpoint
Use Postman or curl to test:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "company": "Acme Corp",
    "service": "Process Optimization",
    "message": "Hello, I would like to discuss..."
  }'
```

## Features
✅ Sends email to admin (mobeenbaig011@gmail.com)
✅ Sends confirmation email to user
✅ Beautiful HTML email templates
✅ Form validation
✅ Error handling
✅ CORS enabled
✅ Health check endpoint

## Endpoints

### POST /api/contact
Sends contact form submission
**Required fields:** firstName, lastName, email, message
**Optional fields:** phone, company, service

### GET /api/health
Returns server status

## Troubleshooting

**Error: "Invalid login credentials"**
- Check EMAIL_PASSWORD is correct (16 characters)
- Ensure 2FA is enabled on Gmail account
- Generate a new App Password

**Error: "CORS error"**
- Make sure frontend is running on http://localhost:5173
- Server frontend URLs are whitelisted in server.js

**Emails not sending**
- Check .env file has correct email and password
- Check internet connection
- Check Gmail security settings allow "Less secure apps"
