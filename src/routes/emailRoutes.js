import express from "express";
import { sendQRCodeToEmail } from "../controllers/index.js";

const router = express.Router();

router.post("/send-qr", sendQRCodeToEmail);

export default router;
