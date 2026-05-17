const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
const { sendToCRM } = require('../utils/crm');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER || 'reyesraghav@gmail.com',
    pass: process.env.SMTP_PASS || 'your_app_password_here'
  }
});

// POST - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    // Try to save to database, but don't fail if MongoDB is down
    try {
      const contact = new Contact({ name, email, phone, subject, message });
      await contact.save();
      console.log('✅ Contact saved to database');
      
      // Also save to CRM (Non-blocking)
      sendToCRM({ name, email, phone, subject, message }, 'Contact Form');
    } catch (dbError) {
      console.log('⚠️ Database save failed, but proceeding with email:', dbError.message);
    }
    
    // Email to Admin
    const adminMailOptions = {
      from: process.env.SMTP_USER || 'reyesraghav@gmail.com',
      to: 'reyesraghav@gmail.com',
      subject: `📧 New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #f59e0b, #f97316); padding: 24px; text-align: center;">
            <h2 style="color: #fff; margin: 0; font-size: 1.5rem;">📧 New Contact Message</h2>
          </div>
          <div style="padding: 30px; background: #fff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px; font-weight: 600; color: #334155;">Name:</td><td style="padding: 10px; color: #475569;">${name}</td></tr>
              <tr style="background: #f8fafc;"><td style="padding: 10px; font-weight: 600; color: #334155;">Email:</td><td style="padding: 10px; color: #475569;">${email}</td></tr>
              <tr><td style="padding: 10px; font-weight: 600; color: #334155;">Phone:</td><td style="padding: 10px; color: #475569;">${phone}</td></tr>
              <tr style="background: #f8fafc;"><td style="padding: 10px; font-weight: 600; color: #334155;">Subject:</td><td style="padding: 10px; color: #475569;">${subject}</td></tr>
              <tr><td colspan="2" style="padding: 16px 10px; border-top: 1px solid #e2e8f0;"><strong style="color: #334155;">Message:</strong><p style="color: #475569; margin: 8px 0 0; line-height: 1.6; white-space: pre-wrap;">${message}</p></td></tr>
            </table>
          </div>
          <div style="background: #0f172a; padding: 16px; text-align: center;">
            <p style="color: #94a3b8; margin: 0; font-size: 0.85rem;">EKOSYS Solar — Think | Innovate</p>
          </div>
        </div>
      `
    };

    // Email to Customer
    const customerMailOptions = {
      from: `"EKOSYS Solar" <${process.env.SMTP_USER || 'reyesraghav@gmail.com'}>`,
      to: email,
      subject: '🌞 We Received Your Message — EKOSYS Solar',
      html: `
        <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background-color: #f8fafc; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0 0 10px; font-size: 2.2rem; font-weight: 800; letter-spacing: 1px;">EKOSYS</h1>
            <p style="color: #d1fae5; margin: 0; font-size: 1.05rem; font-weight: 500;">Powering a Greener, Brighter Tomorrow ☀️</p>
          </div>
          
          <!-- Body -->
          <div style="padding: 40px 30px; background: #ffffff;">
            <h2 style="color: #f97316; margin-top: 0; margin-bottom: 20px; font-size: 1.6rem; border-bottom: 2px solid #a7f3d0; padding-bottom: 12px;">Warm Greetings, ${name}! 🙏</h2>
            
            <p style="color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 24px;">
              Thank you for taking the first step towards clean, sustainable, and free energy! We have successfully received your message regarding <strong>"${subject}"</strong>. 
            </p>
            
            <p style="color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 24px;">
              At <strong>EKOSYS Solar</strong>, our mission is to empower homes and businesses across Bihar with top-tier solar solutions. Our expert engineers are currently reviewing your inquiry and will contact you directly within <strong>24 hours</strong> to discuss the best, most cost-effective solution tailored exclusively for you.
            </p>

            <!-- Summary Box -->
            <div style="background: #f0fdf4; border-radius: 12px; padding: 24px; margin: 30px 0; border-left: 5px solid #f59e0b; box-shadow: inset 0 0 10px rgba(245,158,11,0.05);">
              <h3 style="margin: 0 0 16px; color: #065f46; font-size: 1.15rem;">📝 Your Inquiry Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #475569; width: 30%; font-weight: 600;">Subject:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${subject}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #475569; font-weight: 600;">Phone:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${phone}</td>
                </tr>
              </table>
              <div style="margin-top: 16px; padding-top: 16px; border-top: 1px dashed #a7f3d0;">
                <p style="margin: 0; color: #475569; font-style: italic; line-height: 1.6;">"${message}"</p>
              </div>
            </div>

            <!-- Value Proposition -->
            <div style="margin-top: 36px;">
              <h3 style="color: #0f172a; font-size: 1.2rem; margin-bottom: 16px;">Why Partner with EKOSYS? 🌟</h3>
              <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 1.05rem;">
                <li style="margin-bottom: 10px;"><strong>Expert Assessment:</strong> Free, no-obligation site visits and detailed energy audits.</li>
                <li style="margin-bottom: 10px;"><strong>Government Subsidy:</strong> Complete end-to-end assistance for PM Surya Ghar Yojana (Up to ₹78,000 Subsidy).</li>
                <li style="margin-bottom: 10px;"><strong>Premium Quality:</strong> MNRE approved, Tier-1 Mono PERC Bifacial panels with a 25-Year Performance Warranty.</li>
                <li style="margin-bottom: 10px;"><strong>Peace of Mind:</strong> Seamless installation by certified engineers and dedicated 24/7 post-sales support.</li>
              </ul>
            </div>

            <!-- Call to Action Banner -->
            <div style="background: linear-gradient(to right, #fffbeb, #fef3c7); border: 1px solid #fde68a; border-radius: 12px; padding: 24px; margin: 36px 0; text-align: center;">
              <h3 style="color: #d97706; margin: 0 0 10px; font-size: 1.25rem;">🌞 PM सूर्य घर योजना</h3>
              <p style="color: #92400e; margin: 0; line-height: 1.6; font-size: 1rem;">
                Don't miss out on the incredible Government Subsidy. Start producing your own electricity and reduce your monthly bills to <strong>zero</strong>!
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #0f172a; padding: 30px; text-align: center;">
            <h2 style="color: #f59e0b; margin: 0 0 12px; font-size: 1.4rem; letter-spacing: 1px;">EKOSYS Solar</h2>
            <p style="color: #cbd5e1; margin: 0 0 16px; font-size: 1rem; font-style: italic;">Think | Innovate | Sustain</p>
            
            <div style="margin-top: 20px; border-top: 1px solid #334155; padding-top: 20px;">
              <p style="color: #94a3b8; margin: 6px 0; font-size: 0.95rem;">📞 +91 8757686826</p>
              <p style="color: #94a3b8; margin: 6px 0; font-size: 0.95rem;">✉️ corp.ekosys@gmail.com</p>
              <p style="color: #94a3b8; margin: 6px 0; font-size: 0.95rem;">📍 Hajipur, Vaishali, Bihar - 844101</p>
            </div>
            
            <p style="color: #475569; margin: 24px 0 0; font-size: 0.8rem;">
              This is an automated response. Please do not reply directly to this email unless you have further questions.
            </p>
          </div>
        </div>
      `
    };

    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(customerMailOptions);
    } catch (mailError) {
      console.log('Mail sending failed:', mailError.message);
    }

    res.status(201).json({ success: true, message: 'Message sent successfully! We will contact you soon.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send message', error: error.message });
  }
});

// GET - Get all contacts (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
