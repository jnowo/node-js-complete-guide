const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

//filtering routes, only requests starting with /admin will be handled by adminRoutes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //send must be the last method
  res.status(404).send('<h1>Page not found</h1>');
});
/*//next is a function which will be passed to anonymous function inside use
app.use((req, res, next) => {
  console.log('In the middleware!');
  //if we don't call next request will 'die'. Allows the request to continue to the next middleware in line
  next();
});*/


app.listen(3000);
