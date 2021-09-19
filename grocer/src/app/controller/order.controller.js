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

    // Automatically calculate the total
    const totalCost = 0;
    request.body.orderItems.forEach(element=> {
        totalCost += element.price;
    });
    // The new order object
    const order = new Order({
        _id: request.body._id,
        orderId: request.body._id,
        userId: request.body.userId,
        date: new Date(),
        status: request.body.status,
        total: totalCost,
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

exports.retrieveOrders = (req, res) => {
    Order.find().then(data=> {
        res.send(data);
    })
    .catch(err=> {
        res.status(500).send({
            message: err.message || "An error occurred retrieving requests."
        });
    });
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

exports.findByUser = (request,response)=> {
    const id = request.params.id;

    Order.find({userId:id}).then(data=> {
        res.send(data);
    })
    .catch(err=> {
        res.status(500).send({
            message: err.message || "An error occurred retrieving requests."
        });
    });
};
