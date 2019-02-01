const jwt = require('jsonwebtoken')
const User = require('./models/User')
const { JWT_SECRET } = process.env

// Function for creating tokens
function signToken (user) {
  console.log(user)
  const userData = user.toObject() // Convert user document from mongo to basic JS object.
  delete userData.password // Delete the password property from the object
  delete userData.cities;
  return jwt.sign(userData, JWT_SECRET)
}

// Middleware function for verifying tokens and protecting routes
function verifyToken (req, res, next) {
  // Grab the token from either the header, the body, or query string.
  const token = req.get('token') || req.body.token || req.query.token
  // If no token present, deny access.
  if (!token) return res.json({ success: false, message: 'No token provided' })
  jwt.verify(token, JWT_SECRET, (err, decodedData) => {
    if (err) return res.json({ success: false, message: 'Invalid Token' })

    User.findById(decodedData._id, (err, user) => {
      if (!user) return res.json({ success: false, message: 'Invalid Token.' })
      req.user = user
      next()
    })
  })
};

// Export both functions to be made available elsewhere in our application.
module.exports = { signToken, verifyToken }
