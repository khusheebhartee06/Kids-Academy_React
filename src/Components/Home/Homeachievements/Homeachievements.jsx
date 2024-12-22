import { faBus, faGraduationCap, faPersonChalkboard, faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


function Homeachievements() {
    return (
        <section className="Homeachievements section-notch"id="Homeachievements">
            <div className="overlay p-120">
                <Container>
                    <Row>
                        <Col sm={3} className='mb-5 mb-sm-0'>
                            <p className=' display-5'><FontAwesomeIcon icon={faGraduationCap} /></p>
                            <p className='fw-bold display-5'>320+</p>
                            <p className='h5 fw-bold'>Total Students</p>
                        </Col>
                        <Col sm={3} className='mb-5 mb-sm-0'>
                            <p className=' display-5'><FontAwesomeIcon icon={faSchool} /></p>
                            <p className='fw-bold display-5'>12</p>
                            <p className='h5 fw-bold'>Class Rooms</p>
                        </Col>
                        <Col sm={3} className='mb-5 mb-sm-0'>
                            <p className=' display-5'><FontAwesomeIcon icon={faBus} /></p>
                            <p className='fw-bold display-5'>24</p>
                            <p className='h5 fw-bold'>Schools bus</p>
                        </Col>
                        <Col sm={3} className='mb-5 mb-sm-0'>
                            <p className=' display-5'><FontAwesomeIcon icon={faPersonChalkboard} /></p>
                            <p className='fw-bold display-5'>15</p>
                            <p className='h5 fw-bold'>Total Teachers</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Homeachievements;