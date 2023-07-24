const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res, next) => {
  //join detects operating system and creates correct path
  //__dirname is a global variable which holds the absolute path to the project folder
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;