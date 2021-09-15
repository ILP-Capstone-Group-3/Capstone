module.exports = app => {
    const users = require("../controller/user.controller");

    var router = require("express").Router();

    // Create a new user
    router.post("/", users.register);

    // Get user by id
    router.get("/:id", users.findOne);

    app.use("/api/users", router);
}