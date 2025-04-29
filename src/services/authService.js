import { User } from "../models/index.js";
import bcrypt from "bcryptjs";

export const registerNewUser = async ({ userName, email, password }) => {
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    const error = new Error("User already exists");
    error.status = 400;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    userName,
    email,
    password: hashedPassword,
  });

  return newUser;
};

export const loginUserService = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    const error = new Error("Invalid credentials");
    error.status = 401;
    throw error;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    const error = new Error("Invalid credentials");
    error.status = 401;
    throw error;
  }

  return user;
};
