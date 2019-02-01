const City = require('../models/User');

module.exports = {
    create: (req,res) => {
        City.findById(req.params.id, (err,user) => {
            if (err) return res.json({message:'Error'})
            user.cities.push(req.body);
            user.save( err => {
                if (err) console.log(err);
                res.json({message:'Success', user});
            })
        })
    },

    destroy: (req,res) => {
        City.findByIdAndRemove(req.params.id, (err,city) => {
            if (err) return res.json({message:'Error'});
            res.json({message:'Success'});
        })
    }
}