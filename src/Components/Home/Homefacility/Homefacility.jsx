import React from 'react';
import { faPersonChalkboard, faSchool,faGlobeAsia,faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';


function Homefacility() {
    return (
        <section className="Homefacility p-120">
            <Container>
                <Row>
                    <Col lg={3} md={6} xs={12}>
                    <div className="facility-item">
                         <span className='icon bg-red'> 
                            <FontAwesomeIcon icon={faSchool}/> 
                            </span>
                        <h3 className='fw-bold text-red'>Active Learning</h3>
                        <p>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors
                        after</p>
                    </div>
                    </Col>
                    <Col lg={3} md={6} xs={12}>
                    <div className="facility-item">
                         <span className='icon bg-yellow'> 
                            <FontAwesomeIcon icon={faPersonChalkboard}/> 
                            </span>
                        <h3 className='fw-bold text-yellow'>Expert Teachers</h3>
                        <p>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors
                        after</p>
                    </div>
                    </Col>
                    <Col lg={3} md={6} xs={12}>
                    <div className="facility-item">
                         <span className='icon bg-orange'> 
                            <FontAwesomeIcon icon={faGlobeAsia}/> 
                            </span>
                        <h3 className='fw-bold text-orange'>Strategi Location </h3>
                        <p>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors
                        after</p>
                    </div>
                    </Col>
                    <Col lg={3} md={6} xs={12}>
                    <div className="facility-item">
                         <span className='icon bg-purple'> 
                            <FontAwesomeIcon icon={faGraduationCap}/> 
                            </span>
                        <h3 className='fw-bold text-purple'>Full Day Programs</h3>
                        <p>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors
                        after</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Homefacility;