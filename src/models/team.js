const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    memberName: {
        type: String,
        required: true,
        trim: true
    },
    memberBranch: {
        type: String,
        required: true,
        trim: true
    },
    memberYear: {
        type: String,
        required: true,
        trim: true
    },
    imgPath: {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;