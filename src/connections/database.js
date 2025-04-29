import sequelize from "../config/database.js";
import "../models/index.js";

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");

    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
};
