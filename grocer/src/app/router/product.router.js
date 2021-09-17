module.exports = app => {
    // Import the order controller
    const orders = require("../controller/product.controller");

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

    // Create a new employee
    // The first parameter is a url used in the node server
    // The second parameter is the function to use from the controller
    router.post("/", orders.getProducts);

    router.get("/products", ProductController.getProducts);

    // Since this is the router for users, we use /api/users
    app.use("/api/products", router);
}
