const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  //send method sets headers automatically, but we can also set it by hand with setHeader method to overwrite default one
  res.send('<form action="/admin/add-product" method="post"><input type="text" name="title"><button type="submit">Send</button></form>');
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
