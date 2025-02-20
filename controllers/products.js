import { orders } from '../db.js';

export const getProducts = (req, res) => {
  const allProducts = orders.flatMap((order) => 
    order.products.map((product) => ({
      ...product,
      orderTitle: order.title
    }))
  );
  res.json(allProducts);
};
