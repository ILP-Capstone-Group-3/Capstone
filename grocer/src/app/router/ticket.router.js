module.exports = app => {
    // Import the user controller
    const tickets = require("../controller/ticket.controller");

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

    router.post("/createNewTicket", tickets.createNewTicket);
    router.get("/getSingleTicket/:id", tickets.getSingleTicket);
    router.get("/allUserTickets/:userId", tickets.allUserTickets);
    router.get("/allDatabaseTicket", tickets.allDatabaseTicket);
    router.delete("/deleteTicket/:id", tickets.deleteTicket);

    // Update a ticket by id
    router.put("/updateSingleTicket/:id", tickets.updateOne);

    // Since this is the router for tickets, we use /api/tickets
    app.use("/api/tickets", router);
}