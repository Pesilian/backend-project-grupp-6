import { Router } from 'express';
import { createOrder } from '../services/orderService.js';
import { getOrderById } from '../services/statusService.js';
import authenticate from '../middleware/auth.js';

const orderRouter = Router();

orderRouter.post('/', createOrder);

orderRouter.get('/:orderId', getOrderById);

export default orderRouter;
