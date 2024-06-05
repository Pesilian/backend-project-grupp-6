import { Router } from 'express';
import {
  registerUser,
  loginUser,
  getUserOrders,
} from '../services/userService.js';
import { validateUser } from '../middleware/validateUser.js';

const authRouter = Router();

// "POST" /user/register - Funktion för att registrera en ny användare
authRouter.post('/register', validateUser, registerUser);

// "POST" /user/login - Funktion för att logga in en användare
authRouter.post('/login', loginUser);

// "POST" /user/logout - Funktion för att logga ut en användare
authRouter.post('/logout', (req, res) => {
  global.currentUser = null;
  res.status(200).json({ message: 'Logged out successfully' });
});

//"GET" /user/:userId - för att se orderhistorik för specifik användare
authRouter.get('/:userId', getUserOrders);

export default authRouter;
