import { Router } from 'express';
import { getOrders } from '../controllers/orders.js';

const router = Router();

router.get('/orders', getOrders);

export default router;
