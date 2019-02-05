const User = require('../models/User')

module.exports = {
  create: (req, res) => {
    let { user_id, city_id } = req.params
    User.findById(user_id, (err, user) => {
      if (err) return res.json({ message: 'Error' })
      let { cities } = user
      let city = null
      for (let i = 0; i < cities.length; i++) {
        if (cities[i]._id == city_id) {
          city = cities[i]
        }
      }
      if (city === null) {
        return console.log('No City Found')
      }
      city.places.push(req.body)
      city.save(err => {
        if (err) console.log('Could not update city')
        user.save(err => {
          if (err) console.log(err)
          res.json({ message: 'Success', city })
        })
      })
    })
  },

  destroy: (req, res) => {
    let { user_id, city_id, place_id } = req.params
    User.findById(user_id, (err, user) => {
      if (err) return res.json({ message: 'error' })
      let { cities } = user
      let city = null
      for (let i = 0; i < cities.length; i++) {
        if (cities[i]._id == city_id) {
          city = cities[i]
        }
      }
      if (city === null) {
        return console.log('no city found')
      }
      let {places} = city
      for (let i=0; i<places.length; i++) {
        if (places[i]._id == place_id) {
          places.splice(i,1);
        }
      }
      city.save(err => {
        if (err) console.log('could not delete place')
        user.save(err => {
          if (err) console.log('could not update user')
          res.json({ message: 'success', user })
        })
      })
    })
  }
}
