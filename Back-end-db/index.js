const express = require('express');
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 8080;

const { connectDb } = require("./connectDb.js");
const { resumeRoutes } = require("./Resumes/resume.routes.js");

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.use("/resume", resumeRoutes);

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server running on the port http://localhost:${PORT}`);
    })
})
