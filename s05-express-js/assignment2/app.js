const express = require('express');
const {response} = require("express");

const app = express();

const DUMMY_USERS = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Max'},
  {id: 3, name: 'Ana'},
];

/*app.use((req, res, next) => {
  console.log('Hello from first middleware!');
  next();
});

app.use((req, res, next) => {
  console.log('Hello from second middleware!');
  res.send('<h1>Hello from assignment part 1!</h1>')
});*/
app.use('/users', (req, res, next) => {
  res.send(`<ul>${DUMMY_USERS.map(user => `<li key=${user.id}>${user.name}</li>`)}</ul>`);
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello on homepage!</h1>')
  next();
});


app.listen(3000);