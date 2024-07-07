const {
    createResume,
    viewAllResume,
    resumeUpdateById,
    resumeDeleteById,
} = require("./resume.controller");

const resumeRoutes = require("express").Router();

resumeRoutes.post("/createResume", createResume);
resumeRoutes.get("/viewAllResume", viewAllResume);
resumeRoutes.patch("/:id", resumeUpdateById);
resumeRoutes.delete("/:id", resumeDeleteById);

module.exports = { resumeRoutes };