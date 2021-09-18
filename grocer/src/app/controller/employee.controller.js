const db = require("../models");
// This is how we access the user database
const Employee = db.employees;

// Below are all exported functions to help us in database manipulation

// Register a new employee
exports.register = (request, response)=> {
    // First, we grab the values from the parameters and put them into a
    // new employee object.
    //
    // NOTE: request.body is used for grabbing the parameters!
    const employee = new Employee({
        _id: request.body._id,
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        password: request.body.password,
        hasDefaultPass: request.body.hasDefaultPass
    });

    // This portion saves the user object to the database.
    // save is from Object.save()
    employee.save(employee)
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
    Employee.findById(id).then(data=> {
        if (!data) 
            response.status(404).send({message:"No employee was found with ID " + id});
        else response.send(data);
    })
    .catch(err=> {
        response.status(500).send({message:"Error: Could not retrieve employee with ID " + id});
    });
};

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
    Employee.findByIdAndUpdate(id, request.body, { useFindAndModify: false })
        .then(data=> {
            if (!data) {
                request.status(404).send({
                    message:`Cannot update employee with id=${id}. It probably doesn't exist.`
                });
            } else response.send({message:"Employee updated successfully."});
        })
        .catch(err=> {
            response.status(500).send({
                message: "Error updating employee with id="+id
            });
        });
};

// Delete an employee based on id
exports.deleteOne = (request, response)=> {
    const id = request.params.id;

    Employee.findByIdAndRemove(id, { useFindAndModify: false }).then(data=> {
        if (!data) {
            response.status(404).send({
                message:`Cannot delete employee with id=${id}. It might not exist.`
            });
        } else {
            response.send({
                message:"Employee was deleted successfully!"
            });
        }
    })
    .catch(err=> {
        response.status(500).send({
            message:"Could not delete employee with id="+id
        });
    });
};
