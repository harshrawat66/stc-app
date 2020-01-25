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
    candidatesAppeared: {
        type: Number,
        required:true,
        default: null,
        trim: true,
        validate(value){
            if(value < 0){
                throw new Error('Number of candidates must be greater than zero')
            }
        }
    },
    candidatesSelected: {
        type: Number,
        required:true,
        default: null,
        required:true,
        validate(value){
            if(value < 0){
                throw new Error('Number of candidates must be greater than zero')
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
        ref: 'User'
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