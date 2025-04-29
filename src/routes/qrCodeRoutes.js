import { Router } from "express";
import { protect } from "../middlewares/index.js";
import {
  createQRCode,
  getMyQRCodes,
  updateQRCode,
  deleteQRCode,
} from "../controllers/qrCodeController.js";

const router = Router();

router.route("/")
  .get(protect, getMyQRCodes)
  .post(protect, createQRCode);

router.route("/:id")
  .put(protect, updateQRCode)
  .delete(protect, deleteQRCode);

export default router;
