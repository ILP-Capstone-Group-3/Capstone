const db = require("../models");
const Ticket = db.tickets;

// Creating a new Ticket
exports.createNewTicket = (req, res)=> {

    const newTicket = new Ticket({
        _id: req.body._id,
        userId: req.body.userId,
        email: req.body.email,
        title: req.body.title,
        description: req.body.description,
        messages:[]
        //filename: req.body.filename
    });

    newTicket.save(newTicket)
    .then(data => {
        response.send(data); // This just sends the data in the web console
    })
    .catch(err => {
        response.status(500).send({
            message:
                err.message || "Some error occurred making the ticket"
        });
    });
}

// Find a Single Ticket using the ID
exports.getSingleTicket = (req, res) =>{
    const id = req.params.id;

    // findById is a database function, not user defined
    Ticket.findById(id).then(data=> {
        if (!data) 
            res.status(404).send({message:"No ticket was found with ID " + id});
        else res.send(data);
    })
    .catch(err=> {
        res.status(500).send({message:"Error: Could not retrieve ticket with ID " + id});
    });
}

// All Tickets By User
exports.allUserTickets = (req, res)=> {
    const username = req.params.userId;    

    Ticket.find({userId:username})
        .then(data=> {
            res.send(data);
        })
        .catch(err=> {
            res.status(500).send({
            message: err.message || "An error occurred retrieving tickets by user."
        });
    });
}

// All tickets in DB
exports.allDatabaseTicket= (req, res)=>{
    Ticket.find({}).then(data=> {
        if (!data) 
            res.status(404).send({message:"No tickets were found."});
        else res.send(data);
    })
    .catch(err=> {
        res.status(500).send({message:"Error: Could not retrieve tickets."});
    });
};

// Updating a ticket
exports.updateTicketStatus = (req, res)=> {
    let data = {
        id: req.params.id,
        email: req.body.email
    };
    console.log(data);
    Ticket.findOneAndUpdate({
        ticketid: req.params.id
    }, {
        $set: {
            status: "Resolved and closed"
        }
    }, function (err) {
        if (err) {
            let response = autoresponse.generate(true, "Error", 500, null);
            res.send(response);
        } else {
            console.log(data);
            eventEmitter.emit('Ticket-Close', data)
            let response = autoresponse.generate(false, "Status Changed Successfully", 200, null);
            res.send(response);
        }
    });
};

// Deleting a Ticket
exports.deleteTicket = (req, res)=> {
    const id = req.params.id;

    Ticket.findByIdAndRemove(id, { useFindAndModify: false }).then(data=> {
        if (!data) {
            res.status(404).send({
                message:`Cannot delete ticket with id=${id}. It might not exist.`
            });
        } else {
            res.send({
                message:"Ticket was deleted successfully!"
            });
        }
    })
    .catch(err=> {
        res.status(500).send({
            message:"Could not delete ticket with id="+id
        });
    });
};

// User Message
exports.userMessage = (req, res)=> {

    let message = {
        sender: req.user.firstname + ' ' + req.user.lastname,
        message: req.body.message
    };
    
    //update message in Mongo database for user with the Id
    Ticket.findOneAndUpdate({
        ticketid: req.params.id
    }, {
        $push: {
            "messages": message
        },
    }, function (err) {
        if (err) {
            let response = autoresponse.generate(true, "Error", 500, null);
            res.send(response);
        } else {
            //console.log(result);
            eventEmitter.emit('User-Message', req.params.id);
            let response = autoresponse.generate(false, "Message Sent SUccessfully", 200, null);
            res.send(response);
        }
    });
};

// Admin Message
exports.adminMessage = (req, res)=> {

    let data = {
        user: req.body.username,
        id: req.params.id
    };
    console.log(data);

    let message = {
        sender: "Admin",
        message: req.body.message
    };

    Ticket.findOneAndUpdate({
        ticketid: req.params.id
    }, {
        $push: {
            "messages": message
        },
    }, function (err) {
        if (err) {
            let response = autoresponse.generate(true, "Some error", 500, null);
            res.send(response);
        } else {
            //console.log(result)
            eventEmitter.emit('Admin-Message', data);
            let response = autoresponse.generate(false, "Message Sent Successfully", 200, null);
            console.log(response);
            res.send(response);
        }
    });
};