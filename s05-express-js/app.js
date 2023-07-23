const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(adminRoutes);
app.use(shopRoutes);
app.use(bodyParser.urlencoded({extended: false}));

/*//next is a function which will be passed to anonymous function inside use
app.use((req, res, next) => {
  console.log('In the middleware!');
  //if we don't call next request will 'die'. Allows the request to continue to the next middleware in line
  next();
});*/


app.listen(3000);
