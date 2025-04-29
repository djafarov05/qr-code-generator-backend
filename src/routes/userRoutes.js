import { Router } from "express";
import { protect } from "../middlewares/index.js";
import {
  getUserProfile,
  updateUserProfile,
  deleteUserAccount,
} from "../controllers/userController.js";

const router = Router();

router.get("/profile",  protect, getUserProfile);
router.put("/profile",  protect, updateUserProfile);
router.delete("/delete", protect, deleteUserAccount);

export default router;
