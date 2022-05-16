const ApiError = require('../error/ApiError')


module.exports = function (err, req, res, next) {
    if(err instanceof ApiError) {
        return res.status(err.status).json({message: err.message})
    }
    // If we catch other error we see this message
    return res.status(500).json({message: "Sorry something gone wrong!"})
}