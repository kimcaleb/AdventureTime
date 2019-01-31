const User = require('../models/User')
const signToken = require('../serverAuth').signToken

module.exports = {
  // List all the users
  index: (req, res) => {
    User.find({}, (err, users) => {
      if (err) return res.json({ message: 'Error', payload: null, code: err.code })
      res.json({ message: 'Success', payload: users })
    })
  },

  show: (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) return res.json({ message: 'Error', payload: null, code: err.code })
      res.json({ message: 'Success', payload: user })
    })
  },

  create: (req, res) => {
    User.create(req.body, (err, user) => {
      if (err) return res.json({ message: 'Error', payload: null, code: err.code })
      const token = signToken(user)
      res.json({ message: 'Success', token })
    })
  },

  update: (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (!req.body.password) delete req.body.password
      Object.assign(user, req.body)
      user.save((err, updatedUser) => {
        if (err) return res.json({ message: 'Error', payload: null, code: err.code })
        const token = signToken(user);
        res.json({ message: 'Success', payload: {updatedUser, token }})
      })
    })
  },

  destroy: (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) return res.json({ message: 'Error', payload: null, code: err.code })
      res.json({ message: 'Success', payload: user })
    })
  },

	authenticate: (req, res) => {

		let { email, password } = req.body;
		User.findOne({ email }, (err, user) => {
      
			if (!user || !user.validPassword(password)) {
				return res.json({ success: false, message: "Invalid Credentials" });
      }
      console.log(user);
      const token = signToken(user);
			res.json({ success: true, token });
		})
	}
}
