import express from 'express';
import { body } from 'express-validator';
import { registerUser, loginUser, logoutUser } from '../controllers/authController.js';

const router = express.Router();

router.post(
  '/register',
  [
    body('userName').trim().notEmpty().withMessage('User name is required'),
    body('email').isEmail().withMessage('Valid e-mail is required'),
    body('password').isLength({ min: 6 }).withMessage('Min 6 characters'),
  ],
  registerUser
);

router.post(
  '/login',
  [
    body('email').isEmail(),
    body('password').notEmpty(),
  ],
  loginUser
);

router.post('/logout', logoutUser);

export default router;
