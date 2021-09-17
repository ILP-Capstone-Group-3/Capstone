const db = require("../models");
// This is how we access the user database
const Order = db.orders;

// Below are all exported functions to help us in database manipulation

// Post a new order
exports.postOrder = (request,response)=> {
    // First, we grab the values from the parameters and put them into a
    // new employee object.
    //
    // NOTE: request.body is used for grabbing the parameters!
    const order = new Order({
        _id: request.body._id,
        userId: request.body.userId,
        date: request.body.date,
        status: request.body.status,
        email: request.body.email,
        orderItems: request.body.orderItems,
    });

    // This portion saves the user object to the database.
    // save is from Object.save()
    order.save(order)
    .then(data => {
        response.send(data); // This just sends the data in the web console
    })
    .catch(err => {
        response.status(500).send({
            message:
                err.message || "Some error occurred registering the user"
        });
    });
};


exports.retrieveOrders = (req, res, next) => {
    Order.find({}).then((fetchedOrders)=> {
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
};

exports.updateOrder = (req, res, next) => {
    // Grab the "id" parameter from the URL, which looks like
    // http://localhost:9090/api/users/id
    //
    // NOTE: notice how it doesn't grab the id from the angular server,
    //       but instead grabs it from the node server! Node server port 
    //       is 9090, angular is 4200.
    const id = req.params.id;

    // findByIdAndUpdate is part of the database library
    // request.body is the entirety of the content to modify in the database
    Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data=> {
            if (!data) {
                req.status(404).send({
                    message:`Cannot update order with id=${id}. It probably doesn't exist.`
                });
            } else res.send({message:"Order updated successfully."});
        })
        .catch(err=> {
            res.status(500).send({
                message: "Error updating order with id="+id
            });
        });
};

exports.retrieveNewestOrders = (req, res, next) => {
    Order.find().sort({date: -1}).then((fetchedOrders)=> {
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
};

exports.retrieveOldestOrders = (req, res, next) => {
    Order.find().sort({created_at: -1}).then((fetchedOrders)=> {
        console.log(fetchedOrders);
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })

};

exports.retrieveDeliveryOrders = (req, res, next) => {
    Order.find({"status" : "Out for delivery"}).then((fetchedOrders)=> {
        console.log(fetchedOrders);
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
};

exports.retrieveDeliveredOrders = (req, res, next) => {
    Order.find({"status" : "Delivered"}).then((fetchedOrders)=> {
        console.log(fetchedOrders);
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
};

exports.retrieveCanceledOrders = (req, res, next) => {
    Order.find({"status" : "Canceled"}).then((fetchedOrders)=> {
        console.log(fetchedOrders);
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
};

exports.retrieveShippedOrders = (req, res, next) => {
    Order.find({"status" : "Shipped"}).then((fetchedOrders)=> {
        console.log(fetchedOrders);
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
};

exports.searchOrders = (req, res, next) => {
    console.log(req.params.email);
    Order.find({"email": req.params.email}).then((fetchedOrders)=> {
        console.log(fetchedOrders);
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
};
