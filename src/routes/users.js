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
authRouter.get('/:userId/orders', getUserOrders);

export default authRouter;

// authRouter.get("/user/orders/:userId", authenticateUser, getUserOrders);
// GET-endpoint för att returnera alla användare
// router.get("/all", (req, res) => {
//   res.status(200).json(users);
// });
// POST-endpoint för att registrera en ny användare
// router.post("/register", (req, res) => {
//   const { username, password } = req.body;
//   const newUser = {
//     id: users.length + 1,
//     username,
//     password,
//   };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });

// POST-endpoint för att hantera inloggning av användare
// router.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   console.log("Incoming data:", req.body); // Logga inkommande data
//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );
//   if (user) {
//     res.status(200).json(user.orders);
//   } else {
//     res.status(404).json({ message: "User not found" });
//   }
// });

// Ny endpoint för att hämta orderhistorik för en specifik användare

// router.get('/:userId/orders', (req, res) => {
//   const userId = parseInt(req.params.userId, 10);
//   const user = users.find(u => u.id === userId);
//   if (user) {
//     res.status(200).json(user.orders);
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });
