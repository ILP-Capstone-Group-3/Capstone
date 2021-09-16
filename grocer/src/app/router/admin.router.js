let express = require("express");
let router = express.Router();  //router reference. 
let AdminController = require("../controller/admin.controller.js");

//mapping sub path with http methods.
router.get("/allAdminDetails", AdminController.getAllAdminDetails);
router.post("/addEmployeeDetails", AdminController.addEmployeeDetails);
router.post("/addProductDetails", AdminController.addProductDetails);
router.delete("/deleteProductByName/:name",AdminController.deleteProductByName);
router.put("/updateProductPrice",AdminController.updateProductPrice);
router.put("/updateProductQuantity",AdminController.updateProductQuantity);
router.delete("/deleteEmployeeByEmail/:email", AdminController.deleteEmployeeByEmail);
router.get("/allEmployeeRequests", AdminController.getAllEmployeeRequests);
router.put("/updateRequests", AdminController.updateRequests);
router.put("/lockUserAccount", AdminController.lockUserAccount);



module.exports=router;