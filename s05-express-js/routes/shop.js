const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');


const router = express.Router();

router.get('/', (req, res, next) => {
  //join detects operating system and creates correct path
  //__dirname is a global variable which holds the absolute path to the project folder
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;