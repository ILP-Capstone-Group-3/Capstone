module.exports = app => {
    // Import the user controller
    const reports = require("../controller/reports.controller");

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
    router.post("/", reports.create);

    // Retrieve a list of reports daily
    router.get("/:time", reports.findByTime);

    // Retrieve a list of reports by user
    router.get("/:time/:userid", reports.findByUser);

    // Retrieve a list of reports by product
    router.get("/:time/:product", reports.findByProduct);

    // Retrieve a list of reports by all
    router.get("/:time/:userid/:product", reports.findByAll);

    // Since this is the router for users, we use /api/users
    app.use("/api/reports", router);
}
