let OrderModel = require("../model/order.model.js");
const bcrypt = require("bcrypt");

let retrieveOrders = (req, res, next) => {
    OrderModel.find({}).then((fetchedOrders)=> {
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
}

let updateOrders = (req, res, next) => {
    console.log(req.body);
    let updatedOrders = [];
    req.body.forEach(order => {
        OrderModel.findByIdAndUpdate({_id: order._id}, order, {new: true}).then((updatedOrder)=> {
            updatedOrders.push(updatedOrder);
        });
    })
    console.log(updatedOrders);
    res.status(200).json({
        message: 'Orders Updated!',
        orders: updatedOrders
    });
}

let postOrder = (req, res, next) => {
    console.log(req.body);
    let order = new OrderModel({
        _userId : req.body._userId,
        status : req.body.status,
        date: req.body.date,
        email : req.body.email,
        userName : req.body.email,
        orderItems : req.body.orderItems
    })
    order.save()
    .then(order => {
        res.status(201).json({
          message: 'Order created!',
          order: order
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        })
      })
}

let retrieveNewestOrders = (req, res, next) => {
    OrderModel.find().sort({date: -1}).then((fetchedOrders)=> {
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
}

let retrieveOldestOrders = (req, res, next) => {
    OrderModel.find().sort({created_at: -1}).then((fetchedOrders)=> {
        console.log(fetchedOrders);
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })

}

let retrieveDeliveryOrders = (req, res, next) => {
    OrderModel.find({"status" : "Out for delivery"}).then((fetchedOrders)=> {
        console.log(fetchedOrders);
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
}

let retrieveDeliveredOrders = (req, res, next) => {
    OrderModel.find({"status" : "Delivered"}).then((fetchedOrders)=> {
        console.log(fetchedOrders);
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
}

let retrieveCanceledOrders = (req, res, next) => {
    OrderModel.find({"status" : "Canceled"}).then((fetchedOrders)=> {
        console.log(fetchedOrders);
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
}

let retrieveShippedOrders = (req, res, next) => {
    OrderModel.find({"status" : "Shipped"}).then((fetchedOrders)=> {
        console.log(fetchedOrders);
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
}

let searchOrders = (req, res, next) => {
    console.log(req.params.email);
    OrderModel.find({"email": req.params.email}).then((fetchedOrders)=> {
        console.log(fetchedOrders);
        res.status(200).json({
            message: 'Orders fetched!',
            orders: fetchedOrders
          });
    })
}


module.exports = {searchOrders, retrieveOrders, updateOrders, postOrder, retrieveNewestOrders, retrieveOldestOrders, retrieveDeliveryOrders, retrieveDeliveredOrders, retrieveCanceledOrders, retrieveShippedOrders};