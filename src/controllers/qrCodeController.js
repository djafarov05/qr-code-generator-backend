import QRCode from "../models/qrCodeModel.js";

export const createQRCode = async (req, res, next) => {
  try {
    const { content, color, size, label } = req.body;
    const qr = await QRCode.create({
      userId: req.user.id,
      content,
      color,
      size,
      label,
    });
    res.status(201).json(qr);
  } catch (e) {
    next(e);
  }
};

export const getMyQRCodes = async (req, res, next) => {
  try {
    const list = await QRCode.findAll({
      where: { userId: req.user.id },
      order: [["createdAt", "DESC"]],
    });
    res.json(list);
  } catch (e) {
    next(e);
  }
};

export const updateQRCode = async (req, res, next) => {
  try {
    const { id }   = req.params;
    const { label } = req.body; 
    const qr = await QRCode.findOne({ where: { id, userId: req.user.id } });
    if (!qr) return res.status(404).json({ message: "Not found" });
    await qr.update({ label });
    res.json(qr);
  } catch (e) {
    next(e);
  }
};

export const deleteQRCode = async (req, res, next) => {
  try {
    const { id } = req.params;
    const qr = await QRCode.findOne({ where: { id, userId: req.user.id } });
    if (!qr) return res.status(404).json({ message: "Not found" });
    await qr.destroy();
    res.json({ message: "Deleted" });
  } catch (e) {
    next(e);
  }
};
