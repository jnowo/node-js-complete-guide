const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //send must be the last method
  res.status(404).render('404', {pageTitle: 'Page not found'});
});
/*//next is a function which will be passed to anonymous function inside use
app.use((req, res, next) => {
  console.log('In the middleware!');
  //if we don't call next request will 'die'. Allows the request to continue to the next middleware in line
  next();
});*/


app.listen(3000);
