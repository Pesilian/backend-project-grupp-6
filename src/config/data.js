import nedb from 'nedb-promises';

const usersOrder = new nedb({ filename: 'usersOrder.db', autoload: true });
const guestOrder = new nedb({ filename: 'guestOrders.db', autoload: true });
const newUserDb = new nedb({ filename: 'newUsers.db', autoload: true });

const menu = [
  {
    id: 1,
    title: 'Bryggkaffe',
    desc: 'Bryggd på månadens bönor.',
    price: 39,
    preptime: 12,
  },
  {
    id: 2,
    title: 'Caffè Doppio',
    desc: 'Bryggd på månadens bönor.',
    price: 49,
    preptime: 1.2,
  },
  {
    id: 3,
    title: 'Cappuccino',
    desc: 'Bryggd på månadens bönor.',
    price: 49,
    preptime: 1.2,
  },
  {
    id: 4,
    title: 'Latte Macchiato',
    desc: 'Bryggd på månadens bönor.',
    price: 49,
    preptime: 1.2,
  },
  {
    id: 5,
    title: 'Kaffe Latte',
    desc: 'Bryggd på månadens bönor.',
    price: 54,
    preptime: 1.2,
  },
  {
    id: 6,
    title: 'Cortado',
    desc: 'Bryggd på månadens bönor.',
    price: 39,
    preptime: 1.2,
  },
];

const companyInfo = [
  {
    title: 'Air Bean',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae condimentum neque. Suspendisse nec sollicitudin orci, vel tristique nisl. Ut in diam id odio efficitur laoreet. Sed sed massa consequat, malesuada neque eu, placerat orci. Nam molestie, enim eget malesuada finibus, tellus sem efficitur tortor, eget maximus erat lacus in.',
  },
];

// Registrerade användare
const users = [
  {
    id: 1,
    username: 'JofAlm',
    password: '123456',
    orders: [],
  },
  {
    id: 2,
    username: 'LinneaSjoholm',
    password: 'abcdef',
    orders: [],
  },
  {
    id: 3,
    username: 'Pesilian',
    password: '789101',
    orders: [],
  },
  {
    id: 4,
    username: 'patrikeriksson',
    password: 'ghijkl',
    orders: [],
  },
  {
    id: 5,
    username: 'vickanS',
    password: '121314',
    orders: [],
  },
];

export { menu, companyInfo, newUserDb, users, usersOrder, guestOrder };
