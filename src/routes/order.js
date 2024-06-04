import { Router } from 'express';
import {
  createOrderGuest,
  createOrderUser,
  viewCartGuest,
  viewCartUser,
  deleteOrder,
  getOrder,
  // deliveryTime,
} from '../services/orderService.js';
import { validateOrder } from '../middleware/validateOrder.js';
import { authenticateUser } from '../middleware/authenticateUser.js';

const orderRouter = Router();
// "POST"/order/guest - Funktion för att skapa en ny order som gäst
orderRouter.post('/guest', validateOrder, createOrderGuest);
// "POST"/order/user - Funktion för att skapa en ny order som inloggad användare
orderRouter.post('/user', authenticateUser, validateOrder, createOrderUser);
// // "GET"/order/guest/cart Få fram kundvagnen med totalpris på ordern som gäst
orderRouter.get('/guest/cart', viewCartGuest);
// // "GET"/order/user/cart Få fram kundvagnen med totalpris på ordern som inloggad användare
orderRouter.get('/user/cart', authenticateUser, viewCartUser);
// "DELETE"/order ta bort en order
orderRouter.delete('/:id', deleteOrder);
//Get timeestimate
orderRouter.get('/:id', getOrder);

//

export default orderRouter;

// "POST"/order Funktion för att skapa en ny order som inloggad användare
// orderRouter.post("/", createOrderUser, validateOrder);
// // "POST"/order Funktion för att skapa en ny order som gäst
// orderRouter.post("/", createOrderGuest, validateOrder);
