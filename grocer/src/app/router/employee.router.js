let express = require("express");
let router = express.Router();  //router reference. 
let EmployeeController = require("../controller/employee.controller.js");

//mapping sub path with http methods.
router.post("/login",EmployeeController.login);
router.post("/signup", EmployeeController.signup);
router.post("/submitRequest", EmployeeController.submitRequest);
router.get("/allEmployeeDetails", EmployeeController.getAllEmploeeDetails);
router.get("/retrieveRequests/:username", EmployeeController.retrieveRequests);
router.put("/updateEmployeePassword", EmployeeController.updateEmployeePassword);

module.exports=router;