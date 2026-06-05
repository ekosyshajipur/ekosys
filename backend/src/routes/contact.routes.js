const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { sendToCRM } = require('../utils/crm');
const { sendToGoogleSheet } = require('../utils/googleSheet');
const { verifyTurnstileToken } = require('../utils/turnstile');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER || 'corp.ekosys@gmail.com',
    pass: process.env.SMTP_PASS || 'vgrw kbgg qtxf bcgj'
  }
});

// POST - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, city, enquiryType, requirement, turnstileToken } = req.body;

    // Verify Turnstile Token
    const isHuman = await verifyTurnstileToken(turnstileToken);
    if (!isHuman) {
      return res.status(400).json({ success: false, message: 'Bot verification failed. Please try again.' });
    }
    
    // Save to CRM (Non-blocking)
    sendToCRM({ name, email, phone, city, enquiryType, requirement }, 'Contact Form');
    
    // Save to Google Sheet (Non-blocking)
    sendToGoogleSheet({ name, email, phone, city, enquiryType, requirement }, 'Contact Form');
    
    // Email to Customer
    const customerMailOptions = {
      from: `"EKOSYS Solar" <${process.env.SMTP_USER || 'corp.ekosys@gmail.com'}>`,
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
              Thank you for taking the first step towards clean, sustainable, and free energy! We have successfully received your message regarding <strong>"${enquiryType}"</strong>. 
            </p>
            
            <p style="color: #334155; line-height: 1.8; font-size: 1.05rem; margin-bottom: 24px;">
              At <strong>EKOSYS Solar</strong>, our mission is to empower homes and businesses across Bihar with top-tier solar solutions. Our expert engineers are currently reviewing your inquiry and will contact you directly within <strong>24 hours</strong> to discuss the best, most cost-effective solution tailored exclusively for you in <strong>${city}</strong>.
            </p>

            <!-- Summary Box -->
            <div style="background: #f0fdf4; border-radius: 12px; padding: 24px; margin: 30px 0; border-left: 5px solid #f59e0b; box-shadow: inset 0 0 10px rgba(245,158,11,0.05);">
              <h3 style="margin: 0 0 16px; color: #065f46; font-size: 1.15rem;">📝 Your Inquiry Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #475569; width: 30%; font-weight: 600;">Enquiry Type:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${enquiryType}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #475569; font-weight: 600;">Phone:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #475569; font-weight: 600;">City:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${city}</td>
                </tr>
              </table>
              <div style="margin-top: 16px; padding-top: 16px; border-top: 1px dashed #a7f3d0;">
                <p style="margin: 0; color: #475569; font-style: italic; line-height: 1.6;">"${requirement}"</p>
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

    // Send email asynchronously (non-blocking)
    transporter.sendMail(customerMailOptions).catch((mailError) => {
      console.log('Mail sending failed:', mailError.message);
    });

    // Respond immediately to the frontend
    res.status(201).json({ success: true, message: 'Message sent successfully! We will contact you soon.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send message', error: error.message });
  }
});

// GET - Return empty since MongoDB is removed
router.get('/', async (req, res) => {
  res.json({ success: true, data: [] });
});

module.exports = router;
