import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

export const registerNewUser = async ({ userName, email, password }) => {
  const exists = await User.findOne({ where: { email } });
  if (exists) {
    const err = new Error("E-mail already registered");
    err.statusCode = 409;
    throw err;
  }

  const hashed = await bcrypt.hash(password, 12);
  return User.create({ userName, email, password: hashed });
};

export const loginUserService = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    const err = new Error("Invalid credentials");
    err.statusCode = 401;
    throw err;
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    const err = new Error("Invalid credentials");
    err.statusCode = 401;
    throw err;
  }

  return user;
};
