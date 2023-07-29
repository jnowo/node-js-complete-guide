const express = require('express');
const path = require('path');
const adminData = require('./admin');
const rootDir = require('../utils/path');


const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {prods: products, path: '/', pageTitle: 'Welcome to my Shop!'});
});

module.exports = router;