const express = require('express');
const repoContext = require('./repository/repository-wrapper');
const app = express();

app.listen(3000, function () {
    console.log("server started. Listening on port 3000.");
});

app.get('/api/products', (req, res) => {
    const products = repoContext.products.findAllProducts();
    return res.send(products);
});