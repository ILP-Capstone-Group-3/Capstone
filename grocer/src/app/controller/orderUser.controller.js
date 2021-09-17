//Order version for implementing the table

const { request } = require("http");
const db = require("../models");

const Order = db.orders;


exports.register = (request,response)=> {
    const order = new Order({
        _userId: request.body._userId,
        date: request.body.date,
        status: request.body.status,
        email: request.body.email,
        userName: request.body.userName,
        orderItems: request.body.orderItems
    });

    order.save(order)
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send({
            message:
                err.message || "Some error occured registering the order"
        });
    });
};

exports.findSeveral = (request,response)=> {
    const userID = request.param.id;

    Order.find(userID).then(data=> {
        if(!data)
            response.status(404).send({message:"No orders were found with User ID " + userID});
        else response.send(data);
    })
    .catch(err=> {
        response.status(500).send({message:"Error: Could not retrieve order with User ID " + userID});
    });
};