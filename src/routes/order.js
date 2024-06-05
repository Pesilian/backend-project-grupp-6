import { Router } from 'express';
import { createOrder } from '../services/orderService.js';
import { getOrderById } from '../services/statusService.js';
import authenticate from '../middleware/auth.js';

const orderRouter = Router();

// "POST" /order/
orderRouter.post('/', createOrder);

// "GET" /order/:orderId
orderRouter.get('/:orderId', getOrderById);

export default orderRouter;
