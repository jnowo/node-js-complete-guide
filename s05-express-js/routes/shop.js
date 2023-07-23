const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('In another the middleware!');

  //send method set headers automatically but we can also set it by hand with setHeader method to overwrite default one
  res.send('<h1>Hello from Express.js!</h1>');
});

module.exports = router;