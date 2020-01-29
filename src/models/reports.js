const mongoose = require('mongoose');
const validator = require('validator');

const reportsSchema = new mongoose.Schema({
    companyTitle: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Companies'
    },
    costToCompany: {
        type: String,
        required: true,
        trim: true,
        default: null,
        validate(value){
            if(!validator.isNumeric(value)){
                throw new Error('CTC accepts numeric values only')
            }
        }
    },
    jobEligibility:{
        type: String,
        required: true,
        trim: true
    },
    jobProfile: {
        type: String,
        required:true,
        trim:true
    },
    report: {
        type: String,
        required: true,
        trim: true
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Logins'
    },
    isProcessComplete: {
        type: Boolean,
        required: true
    }  
}, {
    timestamps:true
});


const Reports = mongoose.model('Reports', reportsSchema);

module.exports = Reports;