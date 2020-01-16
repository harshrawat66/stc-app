const mongoose = require('mongoose');
const validator = require('validator');

const Reports = mongoose.model('Reports', {
    companyTitle: {
        type: String,
        required: true,
        trim: true
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
                throw new Error('Candidates appeared must be greater than zero')
            }
        }
    },
    candidatesSelected: {
        type: Number,
        required:true,
        default: null,
        required:true
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
    }
});

module.exports = Reports;