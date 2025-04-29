import {
  createQRCodeForUser,
  getAllQRCodesForUser,
  findQRCodeByIdForUser,
  updateQRCodeLabel,
  deleteQRCodeByInstance,
} from "../services/index.js";

export const createQRCode = async (req, res, next) => {
  try {
    const qr = await createQRCodeForUser(req.user.id, req.body);
    res.status(201).json(qr);
  } catch (e) {
    next(e);
  }
};

export const getMyQRCodes = async (req, res, next) => {
  try {
    const list = await getAllQRCodesForUser(req.user.id);
    res.json(list);
  } catch (e) {
    next(e);
  }
};

export const updateQRCode = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { label } = req.body;

    const qr = await findQRCodeByIdForUser(id, req.user.id);
    if (!qr) return res.status(404).json({ message: "Not found" });

    const updated = await updateQRCodeLabel(qr, label);
    res.json(updated);
  } catch (e) {
    next(e);
  }
};

export const deleteQRCode = async (req, res, next) => {
  try {
    const { id } = req.params;

    const qr = await findQRCodeByIdForUser(id, req.user.id);
    if (!qr) return res.status(404).json({ message: "Not found" });

    await deleteQRCodeByInstance(qr);
    res.json({ message: "Deleted" });
  } catch (e) {
    next(e);
  }
};
