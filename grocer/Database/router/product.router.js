let express = require("express");
let router = express.Router();  //router reference. 
let ProductController = require("../controller/product.controller.js");

//mapping sub path with http methods. 
router.post("/save",ProductController.save);

router.get('/products', ProductController.getProducts);

module.exports=router;