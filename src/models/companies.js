const mongoose = require('mongoose');

const companiesSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    aboutCompany: {
        type: String,
        required: true,
        trim: true
    },
    companyCategory: {
        type: String,
        required: true,
        trim: true
    },
    logoPath: {
        type: String,
        required:true,
        trim: true
    }
},{
    timestamps: true
});

const Companies = mongoose.model('Companies', companiesSchema);

module.exports = Companies;