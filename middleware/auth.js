const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req,res,next){
    const token = req.header("x-auth-token");
    // 401 means not autorized
    if(!token){
        return res.status(401).json({msg:"Not authrozed!"})
    }
    // validate token

    try {
        const decoded = jwt.verify(token,config.get('jwtSecret'));
        req.user =  decoded.user;
        next();
    } catch (error) {
        res.status(401).json({msg: "Invalid token"})
    }
}