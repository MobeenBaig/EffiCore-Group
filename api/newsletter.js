import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
            </div>
          </div>
        </div>
      `
    };

    // Send confirmation email to subscriber
    await transporter.sendMail(subscriberMailOptions);

    return res.status(200).json({
      status: 'success',
      message: 'Successfully subscribed! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Newsletter API error:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Failed to process subscription. Please try again later.'
    });
  }
}
