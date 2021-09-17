let express = require("express");
let router = express.Router();  //router reference. 
let UserController = require("../controller/user.controller.js");

//mapping sub path with http methods.
router.post("/login",UserController.login);
router.post("/signup",UserController.signup); 
router.get("/", UserController.test);
router.get("/allUserDetails", UserController.getAllUserDetails);
router.put("/updateUserFunds", UserController.updateUserFunds);
router.put("/editUserDetails", UserController.editUserDetails);

//look for userId and execute the userById method
//any route containing :userId, our app will first execute userById() method
//router.param("userId", userById);

module.exports=router;