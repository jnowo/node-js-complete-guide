const express = require('express');
const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));


app.set('view engine', 'ejs');

app.use(homeRouter);
app.use(usersRouter);

app.listen(3000);