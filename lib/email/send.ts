import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface EmailData {
  name: string;
  email: string;
  phone: string;
  city: string;
  enquiryType: string;
  requirements: string;
}

export async function sendCustomerConfirmation(data: EmailData) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background:#F7F8FA;font-family:'Segoe UI',Roboto,Arial,sans-serif;">
      <div style="max-width:600px;margin:0 auto;background:#ffffff;">
        <!-- Header -->
        <div style="background:#0A1628;padding:32px 40px;text-align:center;">
          <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;letter-spacing:0.5px;">EKOSYS CORPORATION</h1>
          <p style="color:#22903F;margin:4px 0 0;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Engineering the Future</p>
        </div>

        <!-- Content -->
        <div style="padding:40px;">
          <h2 style="color:#0A1628;font-size:20px;margin:0 0 16px;">Thank You, ${data.name}</h2>
          <p style="color:#404550;font-size:15px;line-height:1.7;margin:0 0 24px;">
            Your enquiry has been successfully received. Our team will review your requirements and get in touch with you shortly.
          </p>

          <!-- Enquiry Summary -->
          <div style="background:#F7F8FA;border-radius:12px;padding:24px;margin:0 0 24px;">
            <h3 style="color:#0A1628;font-size:14px;text-transform:uppercase;letter-spacing:1px;margin:0 0 16px;">Enquiry Summary</h3>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="color:#6D7480;font-size:14px;padding:6px 0;width:120px;">Type</td>
                <td style="color:#0A1628;font-size:14px;padding:6px 0;font-weight:600;">${data.enquiryType}</td>
              </tr>
              <tr>
                <td style="color:#6D7480;font-size:14px;padding:6px 0;">City</td>
                <td style="color:#0A1628;font-size:14px;padding:6px 0;">${data.city}</td>
              </tr>
              <tr>
                <td style="color:#6D7480;font-size:14px;padding:6px 0;vertical-align:top;">Requirements</td>
                <td style="color:#0A1628;font-size:14px;padding:6px 0;">${data.requirements.substring(0, 200)}${data.requirements.length > 200 ? "..." : ""}</td>
              </tr>
            </table>
          </div>

          <p style="color:#404550;font-size:14px;line-height:1.7;margin:0 0 8px;">
            If you have any urgent questions, feel free to contact us:
          </p>
          <p style="color:#0A1628;font-size:14px;margin:0 0 4px;">
            📞 <a href="tel:+917644868086" style="color:#1B7A3D;text-decoration:none;">+91 76 44 86 80 86</a>
          </p>
          <p style="color:#0A1628;font-size:14px;margin:0;">
            ✉️ <a href="mailto:ekosys.corp@gmail.com" style="color:#1B7A3D;text-decoration:none;">ekosys.corp@gmail.com</a>
          </p>
        </div>

        <!-- Footer -->
        <div style="background:#F7F8FA;padding:24px 40px;text-align:center;border-top:1px solid #E8EAED;">
          <p style="color:#8B919B;font-size:12px;margin:0;">
            © ${new Date().getFullYear()} EKOSYS CORPORATION. All Rights Reserved.
          </p>
          <p style="color:#8B919B;font-size:12px;margin:4px 0 0;">
            Hajipur - 844101, Vaishali, Bihar, India
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: `"${process.env.FROM_NAME || "EKOSYS CORPORATION"}" <${process.env.FROM_EMAIL}>`,
    to: data.email,
    subject: "Thank You for Contacting EKOSYS CORPORATION",
    html,
  });
}

export async function sendAdminNotification(data: EmailData) {
  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:20px;background:#F7F8FA;font-family:'Segoe UI',Roboto,Arial,sans-serif;">
      <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;padding:32px;">
        <h2 style="color:#0A1628;margin:0 0 20px;">New Enquiry Received</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#6D7480;width:130px;">Name</td><td style="padding:8px 0;font-weight:600;">${data.name}</td></tr>
          <tr><td style="padding:8px 0;color:#6D7480;">Phone</td><td style="padding:8px 0;">${data.phone}</td></tr>
          <tr><td style="padding:8px 0;color:#6D7480;">Email</td><td style="padding:8px 0;">${data.email}</td></tr>
          <tr><td style="padding:8px 0;color:#6D7480;">City</td><td style="padding:8px 0;">${data.city}</td></tr>
          <tr><td style="padding:8px 0;color:#6D7480;">Enquiry Type</td><td style="padding:8px 0;font-weight:600;color:#1B7A3D;">${data.enquiryType}</td></tr>
          <tr><td style="padding:8px 0;color:#6D7480;vertical-align:top;">Requirements</td><td style="padding:8px 0;">${data.requirements}</td></tr>
          <tr><td style="padding:8px 0;color:#6D7480;">Timestamp</td><td style="padding:8px 0;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td></tr>
        </table>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: `"EKOSYS Website" <${process.env.FROM_EMAIL}>`,
    to: process.env.ADMIN_EMAIL || "ekosys.corp@gmail.com",
    subject: `New Enquiry: ${data.enquiryType} — ${data.name}`,
    html,
  });
}
