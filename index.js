const express = require('express');
const repoContext = require('./repository/repository-wrapper');
const app = express();

app.listen(3000, function () {
    console.log("server started. Listening on port 3000.");
});

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const products = repoContext.products.findProductById(id);
    return res.send(products);
});