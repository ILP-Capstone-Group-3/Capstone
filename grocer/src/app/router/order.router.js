let express = require("express");
let router = express.Router();  //router reference. 
let OrderController = require("../controller/order.controller.js");

//mapping sub path with http methods.
// router.post("/login",EmployeeController.login);
// router.post("/signup", EmployeeController.signup);
router.get("/retrieveOrders", OrderController.retrieveOrders);
router.put("/updateOrders", OrderController.updateOrders);
router.post("/postOrder", OrderController.postOrder);
router.get("/newOrders", OrderController.retrieveNewestOrders);
router.get("/oldOrders", OrderController.retrieveOldestOrders);
router.get("/deliveryOrders", OrderController.retrieveDeliveryOrders);
router.get("/deliveredOrders", OrderController.retrieveDeliveredOrders);
router.get("/shippedOrders", OrderController.retrieveShippedOrders);
router.get("/canceledOrders", OrderController.retrieveCanceledOrders);
router.get("/searchOrders/:email", OrderController.searchOrders);


module.exports=router;