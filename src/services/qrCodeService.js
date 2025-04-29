import QRCode from "../models/qrCodeModel.js";

export const createQRCodeForUser = async (userId, data) => {
  return QRCode.create({ userId, ...data });
};

export const getAllQRCodesForUser = async (userId) => {
  return QRCode.findAll({
    where: { userId },
    order: [["createdAt", "DESC"]],
  });
};

export const findQRCodeByIdForUser = async (id, userId) => {
  return QRCode.findOne({
    where: { id, userId },
  });
};

export const updateQRCodeLabel = async (qr, newLabel) => {
  return qr.update({ label: newLabel });
};

export const deleteQRCodeByInstance = async (qr) => {
  return qr.destroy();
};
