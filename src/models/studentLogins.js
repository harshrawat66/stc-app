const mongoose = require('mongoose');

const studentLoginSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    role: {
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

const studentLogins = mongoose.model('studentLogins', studentLoginSchema);

module.exports = studentLogins;