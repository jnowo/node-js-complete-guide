const express = require('express');
const path = require('path');
const routerHome = require('./routes/home');
const router404 = require('./routes/404');
const routerUsers = require('./routes/users');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(routerHome);
app.use(routerUsers);

app.use(router404);


app.listen(3000);