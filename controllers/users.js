const User = require('../models/User');


module.exports = {
    //List all the users
    index: (req,res) => {
        User.find({}, (err,users) => {
            if(err) return res.json({message:'Error', payload:null, code:err.code});
            res.json({message:'Success', payload:users});
        })
    },

    show: (req,res) => {
        User.findById(req.params.id, (err,user) => {
            if (err) return res.json({message:'Error', payload:null, code:err.code});
            res.json({message:'Success', payload:user});
        })
    },

    create: (req,res) => {
        User.create(req.body, (err,user) => {
            if(err) return res.json({message:'Error', payload:null, code:err.code});
            res.json({message:'Success', payload:user});
        })
    },

    update: (req,res) => {
        User.findByIdAndUpdate(req.params.id, (err,user) => {
            if (!req.body.password) delete req.body.password;
            Object.assign(user, req.body);
            user.save((err,updatedUser) => {
                if (err) return res.json({message:'Error', payload:null, code:err.code});
                res.json({message:'Success', payload:updatedUser});
            });
        });
    },

    destroy: (req,res) => {
        User.findByIdAndRemove(req.params.id, (err,user) => {
            if (err) return res.json({message:'Error', payload:null, code:err.code});
            res.json({message:'Success', payload:user});
        })
    }
}