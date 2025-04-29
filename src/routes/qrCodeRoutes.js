import { Router } from "express";
import {
  createQRCode,
  getMyQRCodes,
  updateQRCode,
  deleteQRCode,
} from "../controllers/index.js";
import { protect } from "../middlewares/index.js";

const router = Router();

router.use(protect);

router.route("/").get(getMyQRCodes).post(createQRCode);
router.route("/:id").put(updateQRCode).delete(deleteQRCode);

export default router;
