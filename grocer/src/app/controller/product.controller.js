const db = require("../models");
const Product = db.products;

exports.save = (req, res, next) => {
    const product = new Product({
        _id: req.body._id,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        quantity: req.body.quantity
    });

    product.save(product)
    .then(data => {
        response.send(data); // This just sends the data in the web console
    })
    .catch(err => {
        response.status(500).send({
            message:
                err.message || "Some error occurred registering the user"
        });
    });
};

exports.getProducts = (req, res, next) => {
    Product.find()
    .then(results =>{
        return res.json({products: results});
    });
};
