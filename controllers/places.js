const User = require('../models/User')

module.exports = {
  create: (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) return res.json({ message: 'Error' })
      user.cities.push(req.body)
      user.save(err => {
        if (err) console.log(err)
        res.json({ message: 'Success', user })
      })
    })
  },

  destroy: (req, res) => {
    let { user_id, city_id } = req.params
    User.findByIdAndUpdate(user_id, {
      $pull: { cities: { _id: city_id } }
    }, { new: true }, (err, updatedUser) => {
      if (err) return res.json({ message: 'Error' })
      res.json({ message: 'Success', updatedUser })
    })
  }
}