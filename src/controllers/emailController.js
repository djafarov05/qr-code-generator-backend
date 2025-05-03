import { sendEmailWithQR } from "../services/index.js";

export const sendQRCodeToEmail = async (req, res, next) => {
  try {
    const { email, content, color, size } = req.body;

    if (!email || !content || !color || !size) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await sendEmailWithQR({ email, content, color, size });

    res.status(200).json({ message: "QR code sent to email" });
  } catch (e) {
    next(e);
  }
};
