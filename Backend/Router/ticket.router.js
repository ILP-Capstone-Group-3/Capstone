//load the express module
let express = require("express")

//This is used to create the router reference
//which helps to route to controller function
let router = express.Router();
let ticketController = require("../Controller/ticket.controller")

router.post("/createNewTicket", ticketController.createNewTicket)
router.get("/getSingleTicket", ticketController.getSingleTicket)
router.get("/allUserTickets", ticketController.allUserTickets)
router.get("/allDatabaseTicket", ticketController.allDatabaseTicket)
router.post("/updateTicketStatus/:pid", ticketController.updateTicketStatus)
router.delete("/deleteTicket/:pid", ticketController.deleteTicket)
router.post("/userMessage", ticketController.userMessage)
router.post("/adminMessage", ticketController.adminMessage)

module.exports = router;
