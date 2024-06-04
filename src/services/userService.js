import { users, newUserDb, usersOrder } from '../config/data.js';

// Funktion för att registrera en ny användare

async function registerUser(req, res) {
  const { username, password } = req.body;
  const user = { username, password };

  try {
    // Försök att lägga till den nya användaren i databasen
    const newUser = await newUserDb.insert(user);
    // Om det lyckas, returnera den nya användaren
    res.status(200).json({
      message: 'User registered successfully',
    });
  } catch (error) {
    // Om ett fel uppstår, returnera ett felmeddelande
    res.status(400).json({ error: 'Failed to register user' });
  }
}

// Funktion för att logga in en användare

async function loginUser(req, res) {
  const { username, password } = req.body;

  // Kontrollera att både användarnamn och lösenord finns
  if (!username || !password) {
    // Om något av användarnamn eller lösenord saknas, skicka tillbaka ett felmeddelande med status 400
    return res
      .status(400)
      .json({ error: 'Username and password are required' });
  }
  try {
    // Sök efter användaren i vår databas för nya användare
    const user = newUserDb.find(
      u => u.username === username && u.password === password
    );
    // Om användaren inte hittas i databasen för nya användare, sök i den gamla databasen
    if (!user) {
      user = await users.findOne({ username, password });
    }
    // Om användaren inte hittas, skicka tillbaka ett felmeddelande med status 400
    if (!user) {
      return res.status(400).json({ error: 'Unvalid username or password' });
    }

    // Sätt global.currentUser för att indikera att användaren är inloggad
    global.currentUser = user;

    // Skicka tillbaka ett meddelande om att inloggningen var framgångsrik med status 200
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    // Om ett fel uppstår under inloggningen, skicka tillbaka ett felmeddelande med status 400
    res.status(400).json({ error: 'Failed to login user' });
  }
}

// // Funktion för att hämta en användares orderhistorik

async function getUserOrders(req, res) {
  const userId = req.params.userId;

  try {
    console.log('hello');
    const orders = await usersOrder
      .find({ userId: Number(req.params.userId) })
      .exec();
    console.log(req.params.userId);
    res.send({ orderCount: orders.length, orders: orders });
    console.log(orders);
    // sends dbUsers back to the page
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while fetching orders.');
  }
}
// async function getUserOrders(req, res) {
//     try {
//         // Hämta användarens ID från request params
//         const userId = req.params.userId;
//         // Här antar jag att usersOrder är en databas där användarens orderhistorik lagras
//         // Använd findOne för att hämta en enskild orderhistorik baserat på användarens ID
//         const usersOrder = await usersOrder.findOne({ userId });

//         // Om det inte finns någon orderhistorik för den angivna användaren, skicka tillbaka ett felmeddelande med status 404
//         if(usersOrder.length === 0) {
//             return res.status(404).json({ error: "No orders found" });
//         }

//         // Skicka tillbaka användarens orderhistorik med status 200
//         res.status(200).json(usersOrder);
//     } catch(error) {
//         // Om ett fel uppstår vid hämtning av användarens orderhistorik, skicka tillbaka ett felmeddelande med status 400
//         res.status(400).json({ error: "Failed to get users orders" });
//     }
// };

export { registerUser, loginUser, getUserOrders };
