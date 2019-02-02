const User = require('../models/User')

module.exports = {
    create: (req, res) => {
      let {user_id, city_id} = req.params;
      User.findById(user_id, (err, user) => {
        if (err) return res.json({ message: 'Error' })
        let {cities} = user
        let city = null
        for (let i=0; i<cities.length; i++) {
          if (cities[i]._id == city_id ) {
            city = cities[i]
          }
        } 
        if (city === null) {
          return console.log("No City Found")
        }
        city.places.push(req.body);
        city.save(err => {
            if (err) console.log('Could not update city')
            user.save(err => {
              if (err) console.log(err)
              res.json({ message: 'Success', city})
            })
          })
      })}
      ,


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