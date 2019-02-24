var {
    mongoose
} = require('../db/mongoose');
var _Schema = mongoose.Schema;

var userSchema = new _Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,

    },
    password: {
        type: String,
        minlength: 6,
        trim: true,


    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        // validate: {
        //     validator: (value) => validator.isEmail(value),
        //     message: "{VALUE} is not a valid email"
        // }
    },


});

var User = mongoose.model('User', userSchema);
module.exports = {
    User
}