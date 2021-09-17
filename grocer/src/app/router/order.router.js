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

    router.get("/retrieveOrders", orders.retrieveOrders);
    router.put("/updateOrder/:id", orders.updateOrder);
    router.post("/postOrder", orders.postOrder);
    router.get("/newOrders", orders.retrieveNewestOrders);
    router.get("/oldOrders", orders.retrieveOldestOrders);
    router.get("/deliveryOrders", orders.retrieveDeliveryOrders);
    router.get("/deliveredOrders", orders.retrieveDeliveredOrders);
    router.get("/shippedOrders", orders.retrieveShippedOrders);
    router.get("/canceledOrders", orders.retrieveCanceledOrders);
    router.get("/searchOrders/:email", orders.searchOrders);

    // Since this is the router for users, we use /api/users
    app.use("/api/orders", router);
}