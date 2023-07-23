const express = require('express');

const app = express();

//next is a function which will be passed to anonymous function inside use
app.use((req, res, next) => {
  console.log('In the middleware!');
  //if we don't call next request will 'die'. Allows the request to continue to the next middleware in line
  next();
});
app.use((req, res, next) => {
  console.log('In another the middleware!');

  //send method set headers automatically but we can also set it by hand with setHeader method to overwrite default one
  res.send('<h1>Hello from Express.js!</h1>');
});

app.listen(3000);
