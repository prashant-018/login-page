import express from 'express';
import { registerUser, loginUser, getDashboard } from '../controllers/authController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route
router.get('/dashboard', verifyToken, getDashboard);

export default router;
