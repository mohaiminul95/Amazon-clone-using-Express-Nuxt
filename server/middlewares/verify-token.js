const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    if(token) {
        let checkBearer = "Bearer "; // optional, if bearer provided then remove bearer from token
        if(token.startsWith(checkBearer)){
            token = token.slice(checkBearer.length, token.length);
        }
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(err) {
                res.json({
                    success: false,
                    message: "Failed to authenticate"
                })
            } else {
                req.decoded = decoded; // decoded is the user data
                next();
            }
        })
    } else {
        res.json({
            success: false,
            message: "No token provided"
        })
    }
}