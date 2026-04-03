import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5000'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email transporter configuration
console.log('📧 Email config - User:', process.env.EMAIL_USER ? 'loaded ✓' : 'MISSING ✗');
console.log('📧 Email config - Password:', process.env.EMAIL_PASSWORD ? `loaded (${process.env.EMAIL_PASSWORD.length} chars) ✓` : 'MISSING ✗');

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email transporter error:', error.message);
  } else {
    console.log('✅ Email service ready');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, service, message } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (First Name, Last Name, Email, Message)'
      });
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1A5C5C 0%, #2A7A72 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
          </div>
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">First Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #666;">${firstName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">Last Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #666;">${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #666;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">Phone:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #666;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">Company:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #666;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #333;">Service Interest:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #666;">${service || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
                <td style="padding: 12px 0; color: #666; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #999;">
              <p>Submitted on: ${new Date().toLocaleString()}</p>
              <p>From IP: ${req.ip}</p>
            </div>
          </div>
        </div>
      `
    };

    // Email to user (confirmation)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message - EffiCore Group',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1A5C5C 0%, #2A7A72 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="margin: 0;">Thank You, ${firstName}!</h2>
          </div>
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="color: #333; font-size: 16px;">We've received your message and appreciate you reaching out to EffiCore Group.</p>
            <p style="color: #333; font-size: 16px;">Our team will review your inquiry and get back to you within 24 hours.</p>
            <p style="color: #333; font-size: 16px; margin-bottom: 30px;">In the meantime, if you have any urgent concerns, feel free to contact us directly at <strong>+1(512) 920-6338</strong></p>
            <div style="background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #1A5C5C;">
              <p style="color: #666; font-size: 14px; margin: 0;"><strong>Quick Details of Your Submission:</strong></p>
              <p style="color: #666; font-size: 14px; margin: 5px 0;">Email: ${email}</p>
              <p style="color: #666; font-size: 14px; margin: 5px 0;">Message received at: ${new Date().toLocaleString()}</p>
            </div>
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #999; font-size: 12px;">
              <p>EffiCore Group | Operational Excellence Consulting</p>
              <p>Austin, Texas | +1(512) 920-6338</p>
            </div>
          </div>
        </div>
      `
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    console.log(`✅ Email sent - From: ${email}, Subject: New Contact Form Submission`);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.'
    });

  } catch (error) {
    console.error('❌ Server error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Newsletter endpoint
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    // Validation
    if (!email || !email.trim()) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide a valid email address'
      });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide a valid email address'
      });
    }

    // Email to subscriber (confirmation)
    const subscriberMailOptions = {
      from: process.env.EMAIL_USER,
      to: email.trim(),
      subject: 'Welcome to EffiCore Group Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1A5C5C 0%, #2A7A72 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="margin: 0;">Welcome! 🎉</h2>
          </div>
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="color: #333; font-size: 16px;">Thank you for subscribing to the EffiCore Group newsletter!</p>
            <p style="color: #333; font-size: 16px;">You'll now receive the latest insights on operational excellence, consulting trends, and exclusive updates from our team.</p>
            <div style="background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #1A5C5C; margin: 20px 0;">
              <p style="color: #666; font-size: 14px; margin: 0;"><strong>What to Expect:</strong></p>
              <ul style="color: #666; font-size: 14px; padding-left: 20px;">
                <li>Monthly insights and industry updates</li>
                <li>Exclusive tips for operational optimization</li>
                <li>Valuable resources and white papers</li>
              </ul>
            </div>
            <p style="color: #333; font-size: 16px;">If you have any questions or would like to reach out, please contact us at <strong>+1(512) 920-6338</strong></p>
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #999; font-size: 12px;">
              <p>EffiCore Group | Operational Excellence Consulting</p>
              <p>Austin, Texas | +1(512) 920-6338</p>
              <p><a href="http://localhost:5173" style="color: #1A5C5C; text-decoration: none;">Visit our website</a></p>
            </div>
          </div>
        </div>
      `
    };

    // Send confirmation email to subscriber
    await transporter.sendMail(subscriberMailOptions);

    console.log(`✅ Newsletter confirmation sent to ${email}`);

    res.status(200).json({
      status: 'success',
      message: 'Successfully subscribed! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('❌ Newsletter error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to process subscription. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email endpoint: POST http://localhost:${PORT}/api/contact\n`);
});
