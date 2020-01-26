const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
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
    },
    contactNumber: {
        type: Number,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isNumeric(value)){
                throw new Error('CTC accepts numeric values only')
            }
        }
    }
}, {
    timestamps: true
});

const Users = mongoose.model('User', userSchema);

module.exports = Users ;