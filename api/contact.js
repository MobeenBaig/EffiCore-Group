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

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
}
