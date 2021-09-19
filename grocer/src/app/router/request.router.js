module.exports = app => {
    // Import the request controller
    const requests = require("../controller/request.controller");

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

    router.post("/", requests.create);
    router.put("/:id", requests.updateOne);
    router.get("/", requests.getAll);
    router.get("/:id", requests.getRequestFromId);

    // Since this is the router for tickets, we use /api/tickets
    app.use("/api/requests", router);
}
