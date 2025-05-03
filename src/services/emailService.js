import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

export const sendEmailWithQR = async ({ email, content, color, size }) => {
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(content)}&color=${color.replace("#", "")}`;

  await transporter.sendMail({
    from: '"QR Generator" <noreply@qrgenerator.com>',
    to: email,
    subject: "🎉 QR Code is Ready!",
    html: `
      <div style="max-width: 600px; margin: 0 auto; font-family: 'Segoe UI', sans-serif; background: #ffffff; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background-color: #4f46e5; padding: 20px; color: #ffffff;">
          <h1 style="margin: 0; font-size: 24px;">🎉 Your QR Code is Ready!</h1>
        </div>

        <div style="padding: 24px;">
          <p style="font-size: 16px; color: #333333; margin-bottom: 20px;">
            Hi there! You’ve successfully generated a new QR code using our service.
          </p>

          <div style="text-align: center; margin-bottom: 20px;">
            <img src="${qrImageUrl}" alt="QR Code" style="width: ${size}px; height: ${size}px; border: 1px solid #ccc; padding: 8px; border-radius: 8px;" />
          </div>

          <p style="font-size: 15px; color: #555555; margin-bottom: 30px;">
            This QR code contains your data and can be scanned with any compatible device.
          </p>

          <div style="text-align: center; margin-bottom: 32px;">
            <a href="http://localhost:9000/register" style="display: inline-block; background-color: #4f46e5; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500;">
              👉 Create an Account
            </a>
          </div>

          <p style="font-size: 14px; color: #888888; text-align: center;">
            Thank you for using our QR Generator!<br />
            — QR Generator Team
          </p>
        </div>

        <div style="background-color: #f9f9f9; padding: 16px; text-align: center; font-size: 12px; color: #aaa;">
          © 2025 QR Generator. All rights reserved.
        </div>
      </div>
    `,
  });
};

