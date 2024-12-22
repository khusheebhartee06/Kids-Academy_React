import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faGlasses, faHouseChimney, faLandmark, faLocationArrow, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


function WhyChoose() {
    return (
        <section className="WhyChoose p-120">
            <Container>
                <div className="WhyChoose-header text-center">
                    <h2 className='text-purple fw-bold h1'>Why Choose KidsAcademy </h2>
                    <p>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
                </div>
                <Row className='p-0'>
                    <Col lg={4} xs={12}>
                        <div className="choose-left">
                        <div className="choose-item">
                            <div className="icon bg-yellow">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="choose-content">
                                <h4 className="fw-bold text-yellow">Expert Teachers</h4>
                                <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                            </div>
                        </div>
                        <div className="choose-item">
                            <div className="icon bg-orange">
                                <FontAwesomeIcon icon={faLandmark} />
                            </div>
                            <div className="choose-content">
                                <h4 className="fw-bold text-orange">Multimedia Class
                                </h4>
                                <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                            </div>
                        </div>
                        <div className="choose-item">
                            <div className="icon bg-lightblue">
                                <FontAwesomeIcon icon={faMicrophone} />
                            </div>
                            <div className="choose-content">
                                <h4 className="fw-bold text-lightblue">Music And Art Class  </h4>
                                <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                            </div>
                        </div>
                        </div>
                    </Col>
                    <Col lg={4} xs={12}>
                    <img src={'./img/feature-about.jpg'} alt="" className="img-fluid" />
                    </Col>
                    <Col lg={4} xs={12}>
                       <div className="choose-right">
                       <div className="choose-item ">
                            <div className="icon bg-red">
                                <FontAwesomeIcon icon={faHouseChimney} />
                            </div>
                            <div className="choose-content">
                                <h4 className="fw-bold text-red">Expert Teachers</h4>
                                <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                            </div>
                        </div>
                        <div className="choose-item">
                            <div className="icon bg-purple">
                                <FontAwesomeIcon icon={faGlasses} />
                            </div>
                            <div className="choose-content">
                                <h4 className="fw-bold text-purple">Multimedia Class
                                </h4>
                                <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                            </div>
                        </div>
                        <div className="choose-item">
                            <div className="icon bg-pink">
                                <FontAwesomeIcon icon={faLocationArrow} />
                            </div>
                            <div className="choose-content">
                                <h4 className="fw-bold text-pink">Music And Art Class  </h4>
                                <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                            </div>
                        </div>
                       </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyChoose