const db = require("../models");
const Request = db.requests;

exports.create = (req,res)=> {
    // First, we grab the values from the parameters and put them into a
    // new user object.
    //
    // NOTE: request.body is used for grabbing the parameters!
    const request = new Request({
        _id: req.body._id,
        requestId: req.body._id,
        employeeId: req.body.employeeId,
        product: req.body.product,
        quantity: req.body.quantity,
        status: "Pending"
    });

    // This portion saves the user object to the database.
    // save is from Object.save()
    request.save(request)
    .then(data => {
        res.send(data); // This just sends the data in the web console
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred creating the request"
        });
    });
};

exports.updateOne = (req, res)=> {
    const id = req.params.id;

    // findById is a database function, not user defined
    Request.findById(id).then(data=> {
        if (!data) 
            res.status(404).send({message:"No request was found with ID " + id});
        else res.send(data);
    })
    .catch(err=> {
        res.status(500).send({message:"Error: Could not retrieve request with ID " + id});
    });
};

exports.getAll = (req,res)=> {
    Request.find().then(data=> {
        res.send(data);
    })
    .catch(err=> {
        res.status(500).send({
            message: err.message || "An error occurred retrieving requests."
        });
    });
};

exports.getRequestFromId = (req,res)=> {
    const id = req.params.id;

    // findById is a database function, not user defined
    Request.findById(id).then(data=> {
        if (!data) 
            res.status(404).send({message:"No request was found with ID " + id});
        else res.send(data);
    })
    .catch(err=> {
        res.status(500).send({message:"Error: Could not retrieve request with ID " + id});
    });
};
