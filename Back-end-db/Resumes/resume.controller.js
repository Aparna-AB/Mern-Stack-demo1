const mongoose = require("mongoose");
const { ResumeModel } = require("./resume.model");

//new resume------------------------------------------------------------------------------------------
const createResume = async (req, res) => {
    try {
        const { name,
            address,
            DOB,
            contact,
            maritalStatus,
            email,
            percentageHSS,
            degree,
            institution,
            CGPA,
            workExp,
            companyName,
            designation,
            yearsOfExp } = req.body;

        if (!name ||
            !address ||
            !DOB ||
            !contact ||
            !maritalStatus ||
            !email ||
            !percentageHSS ||
            !degree ||
            !institution ||
            !CGPA ||
            !workExp ||
            !companyName ||
            !designation ||
            !yearsOfExp
        ) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        const alreadyExistingResume = await ResumeModel.findOne({ email });
        if (alreadyExistingResume) {
            return res.status(404).json({ message: "This Resume & Email already been taken" })
        }

        const newResume = new ResumeModel({
            name,
            address,
            DOB,
            contact,
            maritalStatus,
            email,
            percentageHSS,
            degree,
            institution,
            CGPA,
            workExp,
            companyName,
            designation,
            yearsOfExp
        });
        await newResume.save();
        return res.status(200).json({ message: "Resume added Successfully", data: newResume });
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({ message: "Server Error" });
    }
};

//Get all resumes--------------------------------------------------------------------------------------

const viewAllResume = async (req, res) => {
    try {
        const allResumes = await ResumeModel.find();
        if (allResumes.length === 0) {
            return res.status(400).json({ message: "No resumes found on the database" });
        }
        return res.status(200).json({ message: "All user Resumes found", data: allResumes });
    } catch (error) {
        return res.status(500).json({ message: "Server Down,Try again later" });
    }
};

//update Resume------------------------------------------------------------------------------------------
const resumeUpdateById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send({ message: "All fields are required" });
        }
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "Invalid id" });
        }
        const userResume = await ResumeModel.findById(id);
        if (!userResume) {
            return res.status(404).send({ message: "This Resume Not found" });
        }
        const {
            name,
            address,
            DOB,
            contact,
            maritalStatus,
            email,
            percentageHSS,
            degree,
            institution,
            CGPA,
            workExp,
            companyName,
            designation,
            yearsOfExp
        } = req.body;

        let updatingField = {};

        if (name) {
            updatingField.name = name;
        }
        if (address) {
            updatingField.address = address;
        }
        if (DOB) {
            updatingField.DOB = DOB;
        }
        if (contact) {
            updatingField.contact = contact;
        }
        if (maritalStatus) {
            updatingField.maritalStatus = maritalStatus;
        }
        if (email) {
            updatingField.email = email;
        }
        if (percentageHSS) {
            updatingField.percentageHSS = percentageHSS;
        }
        if (degree) {
            updatingField.degree = degree;
        }
        if (institution) {
            updatingField.institution = institution;
        }
        if (CGPA) {
            updatingField.CGPA = CGPA;
        }
        if (workExp) {
            updatingField.workExp = workExp;
        }
        if (companyName) {
            updatingField.companyName = companyName;
        }
        if (designation) {
            updatingField.designation = designation;
        }
        if (yearsOfExp) {
            updatingField.yearsOfExp = yearsOfExp;
        }

        const userUpdatedResume = await ResumeModel.findByIdAndUpdate(
            id,
            updatingField,
            { new: true }
        );
        return res.status(200).json({ message: "Resume updated successfully", data: userUpdatedResume });

    } catch (error) {
        return res.status(500).json({ message: "Server Down" })
    }
};

//delete the resume--------------------------------------------------------------------------------------

const resumeDeleteById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send({ message: "All fields are required" });
        }
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "Invalid Id" })
        }
        const userDelResume = await ResumeModel.findById(id);
        if (!userDelResume) {
            return res.status(404).send({ message: "Resume not found" });
        }
        await ResumeModel.findByIdAndDelete(id);
        return res.status(200).send("Resume deleted successfully");
    } catch (error) {
        return res.status(500).json({ message: "Server Down" });
    }
};

module.exports = {
    createResume,
    viewAllResume,
    resumeUpdateById,
    resumeDeleteById
};