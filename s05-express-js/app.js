const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));

/*//next is a function which will be passed to anonymous function inside use
app.use((req, res, next) => {
  console.log('In the middleware!');
  //if we don't call next request will 'die'. Allows the request to continue to the next middleware in line
  next();
});*/

app.use('/add-product', (req, res, next) => {
  //send method set headers automatically but we can also set it by hand with setHeader method to overwrite default one
  res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Send</button></form>');
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
app.use('/', (req, res, next) => {
  console.log('In another the middleware!');

  //send method set headers automatically but we can also set it by hand with setHeader method to overwrite default one
  res.send('<h1>Hello from Express.js!</h1>');
});

app.listen(3000);
