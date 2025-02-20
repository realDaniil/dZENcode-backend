import { Router } from 'express';
import authRoutes from './auth.js';
import productRoutes from './products.js';
import userRoutes from './users.js';
import orderRoutes from './orders.js';
import { authenticateToken } from '../middleware.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/api', authenticateToken, userRoutes);
router.use('/api', authenticateToken, orderRoutes);
router.use('/api', authenticateToken, productRoutes);

export { router };
