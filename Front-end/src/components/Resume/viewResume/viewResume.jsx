import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from "axios";

import "./viewResume.css";

function ViewResume() {
    const navigate = useNavigate();
    const [viewResume, setViewResume] = useState([]);

    function handleBack(){
        navigate("/HomePage");
    }

    useEffect(() => {
        getResumeList();
    }, []);

    const getResumeList = async () => {
        try {
            let res = await axios.get("http://localhost:8080/resume/viewAllResume");
            console.log("response", res);

            let resume = res.data.data;
            if (resume) {
                console.log("List of all the resumes uploaded", resume);
                setViewResume(resume);
            } else {
                console.log("resumes not found");
            }
        } catch (error) {
            console.error("Error occurred", error);
        }
    };

    // const redirectProductDetails = (id) => {
    //     navigate("/product/ProductsDetails/" + id);
    // };
    // const handleBack = () => {
    //     navigate('/seller/AddProductDetails');
    // };

    return (
        <>
         <div>
                    <h2 className="main">List Of All Resumes Created</h2>
                </div>
                {/* <div>
                <h5 style={{float:"right"}} onMouseDown={handleBack}>
                    Back to HomePage
                    </h5>
                </div> */}
            <div className="resumeContainer">
                {viewResume.length === 0 && <h2>Data loading...</h2>}
                {viewResume.map((ress) => (
                    <div key={ress._id} className="card">
                        <div className="card-body">
                            <h5 style={{ fontFamily: "monospace" }}>
                                Name: <span style={{ color: "blue", textTransform: "capitalize" }}><strong>{ress.name}</strong></span>
                            </h5>
                            <h6>Address: <span style={{ color: "blue", fontFamily: "cursive" }}>{ress.address}</span></h6>
                            <h6>DOB: <span style={{ color: "blue", fontFamily: "cursive" }}>{ress.DOB}</span></h6>
                            <h6>Contact: <span style={{ color: "blue", fontFamily: "cursive" }}>{ress.designation}</span></h6>
                            <h6>designation: <span style={{ color: "blue", fontFamily: "cursive" }}>{ress.contact}</span></h6>
                            <h6>Marital Status: <span style={{ color: "blue", fontFamily: "cursive" }}>{ress.maritalStatus}</span></h6>
                            <h6>Email: <span style={{ color: "blue", fontFamily: "cursive" }}>{ress.email}</span></h6>
                            <h6>Percentage Scored in HSS: <span style={{ color: "blue", fontFamily: "cursive" }}>{ress.percentageHSS}</span></h6>
                            <h6>Degree: <span style={{ color: "blue", fontFamily: "cursive" }}>{ress.degree}</span></h6>
                            <h6>Institution : <span style={{ color: "blue", fontFamily: "cursive" }}>{ress.institution}</span></h6>
                            <h6>CGPA in Degree: <span style={{ color: "blue", fontFamily: "cursive" }}>{ress.CGPA}</span></h6>
                            <h6>Work Experience: <span style={{ color: "blue", fontFamily: "cursive" }}>{ress.workExp}</span></h6>
                            <h6>Company Name: <span style={{ color: "blue", fontFamily: "cursive" }}>{ress.companyName}</span></h6>
                            <h6 className="card-text">company:
                                &nbsp; <span style={{ color: "blue", fontFamily: "monospace" }}>{ress.companyName}</span>
                            </h6>
                            <h6>Years of Exp: <span style={{ color: "blue", fontFamily: "cursive" }}>{ress.yearsOfExp}</span></h6>

                        </div><br />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ViewResume;
