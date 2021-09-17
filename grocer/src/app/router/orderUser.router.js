module.exports = app => {
    const order = require("../controller/orderUser.controller");

    var router = require("express").Router();

    router.post("/",order.register);

    router.get("/:id", order.findSeveral);

    //may need to be changed later
    app.use("/api/orders",router);
}