import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./userModel.js";

const QRCode = sequelize.define(
  "QRCode",
  {
    id:        { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId:    {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: "id" },
      onDelete: "CASCADE",
    },
    content:   { type: DataTypes.TEXT,   allowNull: false },
    color:     { type: DataTypes.STRING, allowNull: false },
    size:      { type: DataTypes.INTEGER, allowNull: false },
    label:     { type: DataTypes.STRING(255), allowNull: false, defaultValue: "" },
    isPublic:  { type: DataTypes.BOOLEAN, defaultValue: true },
  },
  { tableName: "qrcodes", timestamps: true }
);

User.hasMany(QRCode, { foreignKey: "userId" });
QRCode.belongsTo(User, { foreignKey: "userId" });

export default QRCode;
