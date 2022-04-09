const express = require('express');

const apptest = express();
// apptest.use((req, res, next) => {
//     console.log("The first midleware");
//     next();
// });
// apptest.use((req, res, next) => {
//     console.log("the second middleware");
//     res.send("<p>Assignment almost solved</p>")
// });
apptest.use('/users', (req, res, next) => {
    console.log('the middleware for the users');
    res.send('<p>The middleware for the users</p>');
});
apptest.use('/', (req, res, next) => {
    console.log('Middleware');
    res.send('<p>The middle ware for the slash </p>');
});


apptest.listen(3000);