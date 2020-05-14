const express = require('express');
const app = express();
const jsonParser = express.json();

let counter = 1;

let cards = [
  {
    text: 'some card',
    id: 0,
    userId: 1
  }
];

let users = [
  { login: 'ivan', id: 1, password: 'qwe' },
  { login: 'nikolay', id: 2, password: 'qwe' },
  { login: 'stepan', id: 3, password: 'qwe' },
];

function resolveCors(res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
}

app.use('/card', jsonParser, function (req, res) {
  resolveCors(res);
  switch (req.method) {
    case 'GET':
      res.json(cards)
      break;
    case 'PUT':
      let card = {
        text: req.body.text,
        id: counter++,
        userId: users.find(user => user.login === req.body.user).id
      };
      cards.push(card);
      res.json({ result: 'success', card: card });
      break;
    case 'POST':
      let card = cards.find(card => card.id === req.body.id).text = req.body.text;
      res.json({ result: 'success', card: card });
      break;
    case 'DELETE':
      cards = cards.filter(card => card.id !== req.body.id);
      res.json({ result: 'success' });
      break;
    default:
      console.log('error request', req.method, req.url);
  }
  console.log('cards: ', cards);
});

// app.use('/user', jsonParser, function (req, res) {
//   resolveCors(res);
//   switch (req.method) {
//     case 'GET':
//       break;
//     case 'PUT':
//       cards.push(req.body.title);
//       break;
//     case 'DELETE':
//       cards = cards.filter(item => item !== req.body.title);
//       break;
//     default:
//       console.log('error request', req.method, req.url);
//   }
//   console.log('cards: ', cards);
//   res.json(cards);  
// });

// app.use('/authorization', jsonParser, function (req, res) {
//   resolveCors(res);
//   switch (req.method) {
//     case 'POST':
//       cards.push(req.body.title);
//       break;
//     default:
//       console.log('error request', req.method, req.url);
//   }
//   console.log('authorization: ', cards);
//   res.json(cards);  
// });

app.listen(3000, function () {
  console.log('ExpressJs server run on 3000 port');
});
