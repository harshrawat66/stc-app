const mongoose = require('mongoose');
const validator = require('validator');

const Logins = mongoose.model('Logins', {
    userName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.includes('password')){
                throw new Error('Password must not conatin password')
            }
        }
    }
});

module.exports = Logins;