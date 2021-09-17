const db = require("../models");
// This is how we access the report database
const Report = db.reports;

// Below are all exported functions to help us in database manipulation

// Create a new report
// Report object: only use {_id, userid, product}!
exports.create = (request, response)=> {
    // First, we grab the values from the parameters and put them into a
    // new report object.
    //
    // NOTE: request.body is used for grabbing the parameters!
    const currentDay = new Date();
    const report = new Report({
        _id: request.body._id,
        userid: request.body.userid,
        product: request.body.userid,
        day: currentDay.getDate(),
        weekDay: currentDay.getDay(),
        month: currentDay.getMonth(),
        year: currentDay.getFullYear()
    });

    // This portion saves the report object to the database.
    // save is from Object.save()
    report.save(report)
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

// Retrieve reports based on time
exports.findByTime = (request, response)=> {
    const timeType = request.params.time;
    const currentDate = new Date();
    const curDay = currentDate.getDate();
    const curMonth = currentDate.getMonth(); 
    const curYear = currentDate.getFullYear();

    switch (timeType) {
        case 'daily':
            // Sort by daily
            Report.find({day:curDay, month:curMonth, year:curYear})
            .then(data=> {
                response.send(data);
            })
            .catch(err=> {
                response.status(500).send({
                    message: err.message || "An error occurred retrieving reports."
                });
            });
            break;
        case 'weekly': 
            // Sort by weekly
            const curWeekDay = currentDate.getDay();

            Report.find({day:{$gte:curDay-6}, month:curMonth, year:curYear}).then(data=> {
                response.send(data);
            })
            .catch(err=> {
                response.status(500).send({
                    message: err.message || "An error occurred retrieving reports."
                });
            });
            break;
        case 'monthly':
            // Sort by monthly
            Report.find({month:curMonth, year:curYear})
            .then(data=> {
                response.send(data);
            })
            .catch(err=> {
                response.status(500).send({
                    message: err.message || "An error occurred retrieving reports."
                });
            });
            break;
        default:
            response.status(500).send({
                message: "Something went wrong when finding the reports by time!"
            });
            break;
    }
};

exports.findByUser = (request,response)=> {
    const timeType = request.params.time;
    const username = request.params.userid;
    const currentDate = new Date();
    const curDay = currentDate.getDate();
    const curMonth = currentDate.getMonth(); 
    const curYear = currentDate.getFullYear();

    switch (timeType) {
        case 'daily':
            // Sort by daily
            Report.find({userid:username, day:curDay, month:curMonth, year:curYear})
            .then(data=> {
                response.send(data);
            })
            .catch(err=> {
                response.status(500).send({
                    message: err.message || "An error occurred retrieving reports."
                });
            });
            break;
        case 'weekly': 
            // Sort by weekly
            const curWeekDay = currentDate.getDay();

            Report.find({userid:username, day:{$gte:curDay-6}, month:curMonth, year:curYear}).then(data=> {
                response.send(data);
            })
            .catch(err=> {
                response.status(500).send({
                    message: err.message || "An error occurred retrieving reports."
                });
            });
            break;
        case 'monthly':
            // Sort by monthly
            Report.find({userid:username, month:curMonth, year:curYear})
            .then(data=> {
                response.send(data);
            })
            .catch(err=> {
                response.status(500).send({
                    message: err.message || "An error occurred retrieving reports."
                });
            });
            break;
        default:
            response.status(500).send({
                message: "Something went wrong when finding the reports by time!"
            });
            break;
    }
};

exports.findByProduct = (request,response)=> {
    const timeType = request.params.time;
    const currentDate = new Date();
    const curDay = currentDate.getDate();
    const curMonth = currentDate.getMonth(); 
    const curYear = currentDate.getFullYear();

    switch (timeType) {
        case 'daily':
            // Sort by daily
            Report.find({product:pname, day:curDay, month:curMonth, year:curYear})
            .then(data=> {
                response.send(data);
            })
            .catch(err=> {
                response.status(500).send({
                    message: err.message || "An error occurred retrieving reports."
                });
            });
            break;
        case 'weekly': 
            // Sort by weekly
            const curWeekDay = currentDate.getDay();

            Report.find({product:pname, day:{$gte:curDay-6}, month:curMonth, year:curYear}).then(data=> {
                response.send(data);
            })
            .catch(err=> {
                response.status(500).send({
                    message: err.message || "An error occurred retrieving reports."
                });
            });
            break;
        case 'monthly':
            // Sort by monthly
            Report.find({product:pname, month:curMonth, year:curYear})
            .then(data=> {
                response.send(data);
            })
            .catch(err=> {
                response.status(500).send({
                    message: err.message || "An error occurred retrieving reports."
                });
            });
            break;
        default:
            response.status(500).send({
                message: "Something went wrong when finding the reports by time!"
            });
            break;
    }
};

exports.findByAll = (request,response)=> {
    const timeType = request.params.time;
    const pname = request.params.product;
    const username = +request.params.userid;
    const currentDate = new Date();
    const curDay = currentDate.getDate();
    const curMonth = currentDate.getMonth(); 
    const curYear = currentDate.getFullYear();

    switch (timeType) {
        case 'daily':
            // Sort by daily
            Report.find({userid:username, product:pname, day:curDay, month:curMonth, year:curYear})
            .then(data=> {
                response.send(data);
            })
            .catch(err=> {
                response.status(500).send({
                    message: err.message || "An error occurred retrieving reports."
                });
            });
            break;
        case 'weekly': 
            // Sort by weekly
            const curWeekDay = currentDate.getDay();

            Report.find({userid:username, product:pname, day:{$gte:curDay-6}, month:curMonth, year:curYear}).then(data=> {
                response.send(data);
            })
            .catch(err=> {
                response.status(500).send({
                    message: err.message || "An error occurred retrieving reports."
                });
            });
            break;
        case 'monthly':
            // Sort by monthly
            Report.find({userid:username, product:pname, month:curMonth, year:curYear})
            .then(data=> {
                response.send(data);
            })
            .catch(err=> {
                response.status(500).send({
                    message: err.message || "An error occurred retrieving reports."
                });
            });
            break;
        default:
            response.status(500).send({
                message: "Something went wrong when finding the reports by time!"
            });
            break;
    }
};

