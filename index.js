const express = require('express');
const repoContext = require('./repository/repository-wrapper');
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.listen(3000, function () {
    console.log("server started. Listening on port 3000.");
});

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const products = repoContext.products.findProductById(id);
    return res.send(products);
});

app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    const addedProduct = repoContext.products.createProduct(newProduct);
    return res.send(addedProduct);
})

app.put('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const productPropertiesToUpdate = req.body;
    const updatedProduct = repoContext.products.updateProduct(id, productPropertiesToUpdate);
    return res.send(updatedProduct);
});