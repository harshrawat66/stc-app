const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
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
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{
    timestamps: true
});

const Logins = mongoose.model('Logins', loginSchema);

module.exports = Logins;