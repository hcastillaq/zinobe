//DB
const faker = require('faker');
const nanoid = require('nanoid');
const DB = {
  bank: {
    capital: 999999999,
  },
  users: [],
  credits: [],
};
const nid = nanoid.customAlphabet('1234567890', 10);
for (let i = 0; i < 100; i++) {
  DB.users.push({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    cedula: Number(nid()),
  });
  const user = DB.users[Math.floor(Math.random() * DB.users.length)];
  DB.credits.push({
    id: faker.datatype.uuid(),
    user_id: user.id,
    user: user,
    date: faker.datatype.datetime().toLocaleDateString(),
    approved: faker.datatype.boolean(),
    paid: faker.datatype.boolean(),
    amount: Number(faker.finance.amount(1000, 10000, false)),
  });
}

// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(DB);
const middlewares = jsonServer.defaults();
const port = 7000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  setTimeout(next, 1000);
});

server.post('/bank/pay', (req, res) => {
  const { amount } = req.body;
  const newCapital = DB.bank.capital + amount;
  DB.bank.capital = newCapital;
  res.status(200).jsonp({
    capital: newCapital,
  });
});

server.get('/credits/pending/', (req, resp) => {
  const credits = DB.credits.filter(
    (credit) => credit.approved && !credit.paid
  );
  resp.status(200).jsonp(credits);
});

server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running');
});
