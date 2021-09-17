let ProductModel = require("../model/product.model.js");

let save = (req, res, next) => {
    const product = new ProductModel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    });
    console.log(product);
    product.save();
    res.status(201).json({
        message: 'Product added successfully' + product
    });
}

let getProducts = (req, res, next) =>{
    ProductModel.find()
        .then(results =>{
            return res.json({products: results});
        });
}

module.exports={
    save,
    getProducts
};