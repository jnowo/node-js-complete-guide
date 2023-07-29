const express = require('express');

const router = express.Router();

const users = [];

router.get('/users', (req, res, next) => {
  res.render('users', {pageTitle: 'Users', path: '/users', users: users});
  next();
});

router.post('/users', (req, res, next) => {
  users.push({username: req.body.username});
  res.redirect('/users');
});

module.exports = router;