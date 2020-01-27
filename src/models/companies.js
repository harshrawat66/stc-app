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
        unique: true,
        trim: true
    }
},{
    timestamps: true
});

companiesSchema.virtual('fetchCompanyName', {
    ref: 'Reports',
    localField: '_id',
    foreignField: 'companyTitle'
});

companiesSchema.methods.toJSON = function () {
    const userObject = this.toObject() ;
    delete userObject.createdAt ;
    delete userObject.updatedAt ;
    delete userObject.__v;
    return userObject ;
}

const Companies = mongoose.model('Companies', companiesSchema);

module.exports = Companies;