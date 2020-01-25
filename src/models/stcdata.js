const mongoose = require('mongoose');

const stcSchema = new mongoose.Schema({
    whatIsStc: {
        type: String,
        required: true,
        trim: true
    },
    whoAreWe: {
        type: String,
        required: true,
        trim: true
    },
    disclaimer: {
        type: String,
        required: true,
        trim: true
    },
    footerData: {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
});

const Stc = mongoose.model('Stc', stcSchema);

module.exports = Stc;