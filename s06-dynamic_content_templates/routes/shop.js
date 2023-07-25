const express = require('express');
const path = require('path');
const adminData = require('./admin');
const rootDir = require('../utils/path');


const router = express.Router();

router.get('/', (req, res, next) => {
  //in this case, data is shared between all users, which is not good
  console.log('shop.ja', adminData.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;