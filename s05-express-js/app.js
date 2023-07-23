const http = require('http');
const express = require('express');

const app = express();

//next is a function which will be passed to anonymous function inside use
app.use((req, res, next) => {
  console.log('In the middleware!');
  //if we don't call next request will 'die'. Alows the request to continue to the next middleware in line
  next();
});
app.use((req, res, next) => {
  console.log('In another the middleware!');

});

const server = http.createServer(app);

server.listen(3000);
