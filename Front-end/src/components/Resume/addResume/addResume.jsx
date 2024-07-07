import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
// import { FaRegEye } from "react-icons/fa6";
// import { FaRegEyeSlash } from "react-icons/fa6";
import axios from 'axios';
import "./addResume.css";


const AddResume = () => {
    const navigate = useNavigate();
    // const [myFile,setMyFile]=useState(null);
    const [resumeData, setResumeData] = useState({
        name: "aparna",
        address: "Tvm",
        DOB: "20/4/1995",
        contact: "9876545670",
        maritalStatus: "Married",
        email: "aparna@gmail.com",
        percentageHSS: "80",
        degree: "BE Computer Science",
        institution: "Narayanaguru",
        CGPA: "8.2",
        workExp: "Yes",
        companyName: "ULTS",
        designation: "developer",
        yearsOfExp: "2",
        // imge:""
    });

    const [validated, setValidated] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handleChange = (e) => {
        setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    };

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function handleBack() {
        navigate("/HomePage");
    }

    // form validation
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);

        if (
            !resumeData.name ||
            !resumeData.address ||
            !resumeData.DOB ||
            !resumeData.contact ||
            !resumeData.maritalStatus ||
            !resumeData.email ||
            !resumeData.percentageHSS ||
            !resumeData.degree ||
            !resumeData.institution ||
            !resumeData.CGPA ||
            !resumeData.workExp ||
            !resumeData.companyName ||
            !resumeData.designation ||
            !resumeData.yearsOfExp
        ) {
            console.log("Please fill all the fields");
            return;
        } else {
            //   if (!resumeData.imge) {
            //     alert("Please select a file");
            //     return;
            //   }
            if (resumeData.contact.length !== 10) {
                console.log("Phone number must be 10 digits");
                return;
            }
            let phoneNumberReg = /^[0-9]{10}$/;
            if (!phoneNumberReg.test(resumeData.contact)) {
                alert("Phone number must be 10 digits");
                return;
            }
            if (!isValidEmail(resumeData.email)) {
                alert("Invalid Email address");
                console.log("Invalid email");
                return;
            }

            sendDataToServer(resumeData);
        }
    };

    const sendDataToServer = async () => {
        try {
            let res = await axios.post('http://localhost:8080/resume/createResume', resumeData);
            if (res.status === 200) {
                console.log("resume created successfully");
                alert("resume created successful.");
                // setTimeout(() => {
                navigate("/resume/viewResume");
                // }, 1500);
            }
        } catch (error) {
            console.log(error);
            if (error.response?.status === 400 || error.response?.status === 404) {
                let mssg = error.response?.data?.message || "something went wrong ,please try later";
                alert(mssg);
            } else {
                alert("Internal server error");
            }
        }
    };


    return (
        <>
        

            <Form
                id="user-signup-form-input"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
            >

                <div className="signup-form-flex-div">
                    <Form.Group >
                        {/* <Form.Label>name</Form.Label> */}
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={handleChange}
                            value={resumeData?.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your name!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            required
                            type="text"
                            value={resumeData?.address}
                            placeholder="address"
                            name="address"
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter your address
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>

                <div className="signup-form-flex-div">

                    <Form.Group>
                        <Form.Control
                            onChange={handleChange}
                            name="DOB"
                            value={resumeData?.DOB}
                            type="date"
                            placeholder="Date of Birth"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter your DOB
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            required
                            as="select"
                            type="select"
                            name="maritalStatus"
                            onChange={handleChange}
                            value={resumeData?.maritalStatus}
                        >
                            <option value="">Select your marital Status</option>
                            <option value="Married">Married</option>
                            <option value="Single">Single</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please select your marital status.
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>

                <div className="signup-form-flex-div">
                    <Form.Group >
                        <Form.Control
                            required
                            type="number"
                            placeholder="contact Number"
                            name="contact"
                            onChange={handleChange}
                            value={resumeData?.contact}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your valid phoneNumber!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            value={resumeData?.email}
                            name="email"
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>

                <div className="signup-form-flex-div">
                    <Form.Group>
                        <Form.Control
                            required
                            type="number"
                            value={resumeData?.percentageHSS}
                            placeholder="percentage in HSS"
                            name="percentageHSS"
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter your percentage scored in HSS.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group >
                        <Form.Control
                            required
                            type="text"
                            placeholder="degree"
                            name="degree"
                            onChange={handleChange}
                            value={resumeData?.degree}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your degree!
                        </Form.Control.Feedback>
                    </Form.Group>

                </div>

                <div className="signup-form-flex-div">


                    <Form.Group>
                        <Form.Control
                            required
                            type="text"
                            value={resumeData?.institution}
                            placeholder="institution"
                            name="institution"
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter the name of your institution.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group >
                        <Form.Control
                            required
                            type="number"
                            placeholder="CGPA"
                            name="CGPA"
                            onChange={handleChange}
                            value={resumeData?.CGPA}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your degree CGPA!
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>

                <div className="signup-form-flex-div">
                    <Form.Group>
                        <Form.Control
                            required
                            as="select"
                            type="select"
                            name="workExp"
                            onChange={handleChange}
                            value={resumeData?.workExp}
                        >
                            <option value="">Do you have any work exp??</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please select your Work Experience.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group >
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Company Name"
                            name="companyName"
                            onChange={handleChange}
                            value={resumeData?.companyName}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your Company name!
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className="signup-form-flex-div">

                    <Form.Group>
                        <Form.Control
                            required
                            type="text"
                            value={resumeData?.designation}
                            placeholder="designation"
                            name="designation"
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter your designation.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group >
                        <Form.Control
                            required
                            type="number"
                            placeholder="yearsOfExp"
                            name="yearsOfExp"
                            onChange={handleChange}
                            value={resumeData?.yearsOfExp}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your Years of Experience!
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>

                {/* <Form.Group>
                        <Form.Control
                            required
                            type="file"
                            value={resumeData?.profilePic}
                            placeholder="Profile Picture"
                            name="profilePic"
                            onChange={handleFilechange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Add Your Profile Picture
                        </Form.Control.Feedback>
                    </Form.Group> */}

                <div className="signup-form-flex-div">
                    <Button id="user-signup-btn" type="submit" >
                        Submit
                    </Button>
                    <Button variant="danger" id="user-signup-btn" onClick={handleBack}>
                    Back to HomePage
                    </Button>
                </div>
            </Form>
        </>
    );
};
export default AddResume;
