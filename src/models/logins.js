const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
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
    }
},{
    timestamps: true
});

loginSchema.methods.toJSON = function () {
    const userObject = this.toObject() ;
    delete userObject.password ;
    delete userObject.role ;
    delete userObject.createdAt ;
    delete userObject.updatedAt ;
    delete userObject.__v;
    return userObject ;
}

const Logins = mongoose.model('Logins', loginSchema);

module.exports = Logins;