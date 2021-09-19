const db = require("../models");
const Ticket = db.tickets;

// Creating a new Ticket
exports.createNewTicket = (req, res)=> {

    const newTicket = new Ticket({
        _id: req.body._id,
        ticketId: req.body._id,
        userId: req.body.userId,
        description: req.body.description,
        isClosed: false
        //filename: req.body.filename
    });

    newTicket.save(newTicket)
    .then(data => {
        res.send(data); // This just sends the data in the web console
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred making the ticket"
        });
    });
};

exports.updateOne = (request,response)=> {
    // Grab the "id" parameter from the URL, which looks like
    // http://localhost:9090/api/users/id
    //
    // NOTE: notice how it doesn't grab the id from the angular server,
    //       but instead grabs it from the node server! Node server port 
    //       is 9090, angular is 4200.
    const id = request.params.id;

    // findByIdAndUpdate is part of the database library
    // request.body is the entirety of the content to modify in the database
    Ticket.findByIdAndUpdate(id, request.body, { useFindAndModify: false })
        .then(data=> {
            if (!data) {
                request.status(404).send({
                    message:`Cannot update ticket with id=${id}. It probably doesn't exist.`
                });
            } else response.send({message:"Ticket updated successfully."});
        })
        .catch(err=> {
            response.status(500).send({
                message: "Error updating ticket with id="+id
            });
        });
};

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