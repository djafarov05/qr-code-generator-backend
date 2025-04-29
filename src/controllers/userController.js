import User from "../models/userModel.js";
import QRCode from "../models/qrCodeModel.js";

export const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ["id", "userName", "email"],
    });
    res.json(user);
  } catch (e) {
    next(e);
  }
};

export const updateUserProfile = async (req, res, next) => {
  try {
    const { userName, email } = req.body;
    const user = await User.findByPk(req.user.id);
    await user.update({ userName, email });
    res.json({ user: { id: user.id, userName, email } });
  } catch (e) {
    next(e);
  }
};

export const deleteUserAccount = async (req, res, next) => {
  try {
    await QRCode.destroy({ where: { userId: req.user.id } });
    await User.destroy({ where: { id: req.user.id } });
    res.clearCookie("token");
    res.json({ message: "Account deleted" });
  } catch (e) {
    next(e);
  }
};
