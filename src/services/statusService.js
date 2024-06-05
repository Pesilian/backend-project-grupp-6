import { orderDb } from '../config/db.js';

async function getOrderById(req, res) {
  try {
    // Hämta orderns ID från request params
    const orderId = req.params.orderId;

    console.log(orderId);

    // Använd find för att hämta en enskild orderhistorik baserat på orderns ID
    const order = await orderDb.findOne({ _id: orderId });

    // Hämta aktuell tid
    const currentTime = new Date();
    const deliveryTime = new Date(order.deliveryTime);
    const isDelivered = deliveryTime <= currentTime;

    // Beräkna tid kvar till leverans om den inte är levererad
    let timeLeft = null;
    if (!isDelivered) {
      const timeDiff = deliveryTime - currentTime;
      const minutesLeft = Math.floor(timeDiff / 60000);

      const secondsLeft = Math.floor((timeDiff % 60000) / 1000);
      timeLeft = `${minutesLeft} minutes and ${secondsLeft} seconds`;
    }

    // Lägg till leveransstatus och tid kvar (om ej levererad) i ordern
    const orderWithDeliveryStatus = {
      ...order,
      isDelivered,
      timeLeft: isDelivered ? null : timeLeft,
    };

    // Skicka tillbaka användarens orderhistorik med status 200
    res.status(200).json({ orderWithDeliveryStatus });
  } catch (error) {
    // Om ett fel uppstår vid hämtning av användarens orderhistorik, skicka tillbaka ett felmeddelande med status 400
    res.status(500).json({ error: 'Failed to get users orders' });
  }
}

export { getOrderById };
