const express = require('express');
const router = express.Router();
const path = require('path');
const rootdir = require('../util/path');

const adminData = require('./admin');


router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('Shop', {
        prods: products,
        pageTitle: 'shop',
        path: '/',
        hasProduct: products.length > 0,
        activeShop: true,
        productCSS: true,
    });
});

module.exports = router;