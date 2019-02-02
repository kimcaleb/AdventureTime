const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const 
    placeSchema = new mongoose.Schema({
        title: {type: String, require:true},
        location: {type: String},
        description: {type: String},
        image: {type:String}
    },{timestamps:true}),
    citySchema = new mongoose.Schema({
        city: {type: String, required:true},
        country: {type: String, required:true},
        price: {type: String },
        places: [placeSchema] 
    }, {timestamps:true}),
    userSchema = new mongoose.Schema({
        name: { type: String },
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true },
        PlaceName: { type: String, required: true},
        cities: [citySchema],     
    }, {timestamps:true})

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}


userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

userSchema.pre('save', function(next) {
    if(this.isModified('password')) {
        this.password = this.generateHash(this.password)
    }
    next()
})

const User = mongoose.model('User', userSchema)
module.exports = User