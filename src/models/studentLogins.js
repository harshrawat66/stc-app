const mongoose = require('mongoose');

const studentLoginSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    token: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

studentLoginSchema.methods.toJSON = function () {
    const userObject = this.toObject() ;
    delete userObject._id ;
    delete userObject.role ;
    delete userObject.createdAt ;
    delete userObject.updatedAt ;
    delete userObject.__v;
    return userObject ;
}

const studentLogins = mongoose.model('studentLogins', studentLoginSchema);

module.exports = studentLogins;