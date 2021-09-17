module.exports = app => {
    // Import the order controller
    const products = require("../controller/product.controller");

    var router = require("express").Router();

    // IMPORTANT: the router.post, router.get, etc. matter! You can 
    // also have multiple router actions (ex. having 2 router.post).
    //
    // Here is a guide on what to use:
    // --------------------------------
    // router.post:   Adding to the database
    // router.get:    Retrieving data
    // router.put:    Updating data
    // router.delete: Deleting data
    // --------------------------------

    router.post("/save", products.save);

    router.get('/products', products.getProducts);

    // Since this is the router for users, we use /api/users
    app.use("/api/products", router);
}
