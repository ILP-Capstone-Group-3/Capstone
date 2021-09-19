module.exports = app => {
    // Import the order controller
    const orders = require("../controller/order.controller");

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

    router.post("/", orders.postOrder);
    router.get("/", orders.retrieveOrders);
    router.get("/:id", orders.findByUser);
    router.put("/:id", orders.updateOrder);

    // Since this is the router for users, we use /api/users
    app.use("/api/orders", router);
}
