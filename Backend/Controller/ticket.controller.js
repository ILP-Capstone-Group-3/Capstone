//loading all the required module used in the file 
let userTicketModel = require('./../Model/ticket.model'); // loads model file for all tickets raised
let events = require('events'); // needed to fire an event
let nodemailer = require('nodemailer'); // needed to send email for tickets raised
let random = require('randomstring'); // needed to generate random message for ticket raised 
let fs = require('fs');
let autoresponse = require('./../autoresponse.js'); // needed to generate responses for tickets raised
let databaseInfo = require('../databaseInfo.js'); // needed to access info stored in database


// creating objects of EventEmitter needed to fire an event 
let eventEmitter = new events.EventEmitter();

// Event when admin sends a message for a particular ticket
eventEmitter.on('Administrator_Message', function (data) {

    let messenger = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,
        service:'yahoo',
        secure: false,
    
        auth: {
            user: databaseInfo.username,
            pwd: databaseInfo.password
        }
    });

    let mailPackage = {
        from: 'raiseTickets <iyiolaolugbenga22@yahoo.com>', // sender address
        to: data.user, // list of receivers
        subject: 'Response from Admin', // Subject line
        html: `<p>Greetings,
                We received your query. Please login and check whether your query with id <span style="color:red"> ${data.id}</span>, is resolved or not.
             </p>` // plain text body
    };

    messenger.sendMail(mailPackage, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log("" + info);
    });
});


// Event when user sends a message for a particular ticket
eventEmitter.on('User-Message', function (data) {

    let messenger = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,
        service:'yahoo',
        secure: false,
    
        auth: {
            user: databaseInfo.username,
            pwd: databaseInfo.password
        }
    });

    let mailPackage = {
        from: 'raiseTickets <iyiolaolugbenga22@yahoo.com>', // sender address
        to: 'gbengaiyiola123@gmail.com', // receiver
        subject: 'Message from User', // Message Title
        html: `<p>Hello,
                    A new message was sent by a User, regarding query with id <span style="color:red">${data}</span> Respond to resolve the query!
                 </p>` // plain text body
    };

    messenger.sendMail(mailPackage, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log("" + info);
    });
});


// Event trigggered when user/admin closes the ticket
eventEmitter.on('Ticket-Closed', function (data) {

    let messenger = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,
        service:'yahoo',
        secure: false,
    
        auth: {
            user: databaseInfo.username,
            pwd: databaseInfo.password
        }
    });

    let mails = [data.email, "gbengaiyiola123@gmail.com"];
    let mailList = mails.toString();
    //console.log(mailList);

    let mailPackage = {
        from: 'raiseTickets <gbengaiyiola123@gmail.com>', // sender address
        to: mailList, // list of receivers
        subject: 'Status Updated!', // Subject line
        html: `<p>Hello,
                        your query with id <span style="color:red">${data.id}</span> has been successfully closed!
                     </p>` // plain text body
    };

    messenger.sendMail(mailPackage, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log("" + info);
    });
});



// Creating a new Ticket
let createNewTicket = (req, res)=> {

    let newTicket = new userTicketModel({
        ticketid: random.generate(20),
        email: req.user.email,
        username: req.user.firstname + ' ' + req.user.lastname,
        title: req.body.title,
        description: req.body.description,
        //filename: req.body.filename
    });

    newTicket.save(function (err) {
        if (err) {
            let response = autoresponse.generate(true, "Some error", 500, null);
            res.send(response);
        } else {
            
            let response = autoresponse.generate(false, "Ticket Raised Suuccessfully", 200, newTicket);
            res.send(response);
        }
    });
}

// Find a Single Ticket using the ID
let getSingleTicket = (req, res) =>{

    userTicketModel.findOne({
        ticketid: req.params.id
    }, function (err, result) {
        if (err) {
            var response = autoresponse.generate(true, "Some error", 500, null);
            res.send(response);
        } else {
            var response = autoresponse.generate(false, "Ticket Info", 200, result);
            res.send(response);
        }
    });
}


// All Tickets By User
let allUserTickets= (req, res)=> {
    console.log("ticket info: " + req.user);
    userTicketModel.find({
        email: req.user.email
    }, function (err, result) {
        if (err) {
            let response = autoresponse.generate(true, "Some error", 500, null);
            res.send(response);
        } else {
            //delete req.user;
            let response = autoresponse.generate(false, "Tickets of users", 200, result);
            res.send(response);
        }
    });
}


// All tickets in DB
let allDatabaseTicket= (req, res)=>{
    userTicketModel.find({}, function (err, result) {
        if (err) {
            let response = autoresponse.generate(true, "Some error", 500, null);
            res.send(response);
        } else {
            let response = autoresponse.generate(false, "All Tickets", 200, result);
            res.send(response);
        }
    });
}


// Changing status of Ticket
let updateTicketStatus = (req, res)=> {
    let data = {
        id: req.params.id,
        email: req.body.email
    };
    console.log(data);
    userTicketModel.findOneAndUpdate({
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
}


// Deleting a Ticket
let deleteTicket = (req, res)=> {

    userTicketModel.findOneAndRemove({
        ticketid: req.params.id
    }, function (err) {
        if (err) {
            let response = autoresponse.generate(true, "Error", 500, null);
            res.send(response);
        } else {
            let response = autoresponse.generate(false, "Ticket Deleted Successfully", 200, null);
            res.send(response);
        }
    });
}


// User Message
let userMessage = (req, res)=> {

    let message = {
        sender: req.user.firstname + ' ' + req.user.lastname,
        message: req.body.message
    };
    
    //update message in Mongo database for user with the Id
    userTicketModel.findOneAndUpdate({
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
}


// Admin Message
let adminMessage = (req, res)=> {

    let data = {
        user: req.body.username,
        id: req.params.id
    };
    console.log(data);

    let message = {
        sender: "Admin",
        message: req.body.message
    };

    userTicketModel.findOneAndUpdate({
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
}

module.exports = {createNewTicket, getSingleTicket, allUserTickets,allDatabaseTicket, updateTicketStatus,
                deleteTicket, userMessage, adminMessage}