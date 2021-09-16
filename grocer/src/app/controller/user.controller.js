const db = require("../models");
// This is how we access the user database
const User = db.users;

// Below are all exported functions to help us in database manipulation

// Register a new user
exports.register = (request, response)=> {
    // First, we grab the values from the parameters and put them into a
    // new user object.
    //
    // NOTE: request.body is used for grabbing the parameters!
    const user = new User({
        _id: request.body._id,
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        dob: request.body.dob,
        phone: request.body.phone,
        address: request.body.address,
        password: request.body.password,
        funds: request.body.funds,
        attemptedLogins: request.body.attemptedLogins,
        isLocked: request.body.isLocked
    });

    // This portion saves the user object to the database.
    // save is from Object.save()
    user.save(user)
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

// Retrieve a user based on an id
exports.findOne = (request, response)=> {
    const id = request.params.id;

    // findById is a database function, not user defined
    User.findById(id).then(data=> {
        if (!data) 
            response.status(404).send({message:"No user was found with ID " + id});
        else response.send(data);
    })
    .catch(err=> {
        response.status(500).send({message:"Error: Could not retrieve user with ID " + id});
    });
};

// Update a user's details based on their id
exports.updateOne = (request, response)=> {
    // Grab the "id" parameter from the URL, which looks like
    // http://localhost:9090/api/users/id
    //
    // NOTE: notice how it doesn't grab the id from the angular server,
    //       but instead grabs it from the node server! Node server port 
    //       is 9090, angular is 4200.
    const id = request.params.id;

    // findByIdAndUpdate is part of the database library
    // request.body is the entirety of the content to modify in the database
    User.findByIdAndUpdate(id, request.body, { useFindAndModify: false })
        .then(data=> {
            if (!data) {
                request.status(404).send({
                    message:`Cannot update user with id=${id}. It probably doesn't exist.`
                });
            } else response.send({message:"User updated successfully."});
        })
        .catch(err=> {
            response.status(500).send({
                message: "Error updating tutorial with id="+id
            });
        });
};

