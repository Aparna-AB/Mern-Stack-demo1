import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import "./homePage.css";

function HomePage() {
    const navigate = useNavigate();

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    let currDate = day + "/" + month + "/" + year;

    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    let currTime = hr + ":" + min + ":" + sec;

    function handleAddResume() {
        navigate('/resume/addResume');
    }

    function handleViewResume() {
        navigate('/resume/viewResume');
    }

    return (
        <>
            <div className="Content">
                <Row>
                    <Row>
                        <Col xs={12}>
                            <div className="topper">
                                <p>
                                    Fill Your resumes for the most challenging and exciting job offers
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            <div className="nav">
                                <h6>
                                    Resume Designs</h6>
                                <h6
                                    onMouseUp={handleAddResume}>Add resume</h6>
                                <h6
                                    onMouseUp={handleViewResume}>View resumes</h6>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={10} >
                            <h3 style={{ marginTop: "20px", marginLeft: "80px", color: "red" }}>Welcome,</h3>
                            <div className="intro">
                                <h3><u>Introduction</u></h3>
                                <p>A personal statement or summary provides a concise overview of your
                                    experience and skills. This is the first part of your CV that recruiters will
                                    read and get an introduction to who you are. A personal statement
                                    should be 3-5 concise sentences. Introduce yourself, your achievements,
                                    and your career goals.</p>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="newCarousel">
                                <Carousel data-bs-theme="dark">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/06/infographic-resume-template-header.png"
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            src="https://static.vecteezy.com/system/resources/previews/021/192/283/non_2x/resume-template-design-for-corporate-job-applications-creative-cv-resume-templates-design-cover-letter-job-applications-colors-cv-design-multipurpose-resume-design-vector.jpg"
                                            className="d-block w-100"
                                            alt="Second slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://designcuts.b-cdn.net/wp-content/uploads/2023/03/4EAtT6WR-simple-resume-cv-template.jpg"
                                            alt="Third slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://cdn.prod.website-files.com/615dc53ac3f5ddb2f90d1117/62bf1810a6c73ecca75c774b_indesign-resume-template-U2-64.jpg"
                                            alt="Fourth slide"
                                        />

                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </div>
        </>
    )
}
export default HomePage;