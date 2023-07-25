const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');

const router = express.Router();

const products = [];
router.get('/add-product', (req, res, next) => {
  //send method sets headers automatically, but we can also set it by hand with setHeader method to overwrite default one
  /*
    res.send('<form action="/admin/add-product" method="post"><input type="text" name="title"><button type="submit">Send</button></form>');
  */
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
