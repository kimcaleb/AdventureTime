const jwt = require('jsonwebtoken');
const User = require('./models/User');
const {JWT_SECRET} = process.env;


function signToken(user) {
    const userData = user.toObject();
    delete userData.password;
    return jwt.sign(userData, JWT_SECRET);
}

//Middleware function for verifying tokens and protecting routes
function verifyToken(req,res,next) {
    const token = req.get('token') || req.body.token || req.query.token
    if (!token) return res.json({success:false, message:'Invalid Token'})
    jwt.verify(token, JWT_SECRET, (err,decodedData) => {
        if (err) return res.json({success:false, message:'Invalid Token'});
        User.findById(decodedData._id, (err,user) => {
            if (!user) return res.json({success:false, message:'No User Found'});
            req.user = user;
            next();
        })
    })
}

module.exports = {signToken, verifyToken}