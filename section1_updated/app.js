const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();
// app.engine('handlebars', expressHbs({
//     layoutsDir: 'views/layouts',
//     defaultLayout: 'main-layout',
//     extname: 'handlebars'
// }));
app.set('view engine', 'ejs');

app.set('/section1/views', '/section1/views');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page not Found'
    });
});

app.listen(3000);