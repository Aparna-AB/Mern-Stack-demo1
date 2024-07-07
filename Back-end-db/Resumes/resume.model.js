const mongoose = require("mongoose");
const { Schema } = mongoose;

const resumeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    DOB: {
        type: String,
        default: Date.now(),
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    maritalStatus: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    percentageHSS: {
        type: Number,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    },
    CGPA: {
        type: String,
        required: true,
    },
    workExp: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    yearsOfExp: {
        type: Number,
        required: true,
    },
    // imge: {
    //     type: Object,
    //     default: null,
    // },

})

const ResumeModel = mongoose.model("Resume", resumeSchema);

module.exports = { ResumeModel };