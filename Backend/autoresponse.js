module.exports.generate = function (error, message, status, data) {

    let autoResponse = {
        error: error,
        message: message,
        status: status,
        data: data
    };

    return autoResponse;

}