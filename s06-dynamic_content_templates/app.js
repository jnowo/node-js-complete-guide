const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); //if we keep data in folder 'views' we don't need this line


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //send must be the last method
  res.status(404).render('404', {pageTitle: 'Page not found'});
});

app.listen(3000);
