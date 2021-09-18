let mongoose = require('mongoose');

mongoose.pluralize(null); //to avoid creating in lower case with s postfix.

let ticketSchema = mongoose.Schema({

    ticketid: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String,
        default: "open"
    },
   
    messages: [{
        sender: {
            type: String
        },
        message: {
            type: String
        },
        created: {
            type: Date,
            default: Date.now
        },
    }],
    
    
});


let ticketModel = mongoose.model("Ticket", ticketSchema)

module.exports =ticketModel; //this enables us to be able to import to another file using require