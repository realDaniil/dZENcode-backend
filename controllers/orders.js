import { orders } from '../db.js';

export const getOrders = (req, res) => {
  res.json(orders);
};
