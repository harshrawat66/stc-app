const mongoose = require('mongoose')
const validator = require('validator')

const Users = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    currentYear: {
        type: Number,
        default: null,
        trim: true
    },
    userDepartment: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = Users ;