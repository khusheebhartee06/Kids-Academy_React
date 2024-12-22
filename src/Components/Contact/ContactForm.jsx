import { faEnvelopeOpenText, faLocationDot, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function ContactForm() {
    return (
        <React.Fragment>
            <section className="ContactForm p-120">
                <Container>
                    <Row>
                        <Col lg={4} md={6} xs={12}>
                            <div className="contact-item">
                                <div className="icon text-yellow">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                                <div className="content">
                                    <h4 className="fw-bold text-yellow">Our Location</h4>
                                    <p>218 Sahera Tropical Center Room#7 <br /> New Newyork Road 1205</p>
                                </div>
                            </div>  
                            <div className="contact-item">
                                <div className="icon text-red">
                                    <FontAwesomeIcon icon={faMobileScreen} />
                                </div>
                                <div className="content">
                                    <h4 className="fw-bold text-red">Phone Number</h4>
                                    <p>01923-970212, 01776-502993 <br /> +2154897369</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon text-orange">
                                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                </div>
                                <div className="content">
                                    <h4 className="fw-bold text-orange">Email Address</h4>
                                    <p>hello@labartisan <br /> hello@codexcoder.com</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={6} xs={12}>
                        <div className="row Form ">
                            <Col lg={6}>
                            <input type="text" name="Name" className='contact-input' id=""placeholder='Your Name ' />
                            </Col>
                            <Col lg={6}>
                            <input type="email" name="Email" className='contact-input' id=""placeholder='Your Email ' /> 
                            </Col>
                            <Col lg={12}>
                            <textarea rows="4" class="contact-input">Your Messages</textarea>
                            </Col>
                            <Col lg={12}>
                            <input type="submit" name="submit" value="Send Message" class="contact-button"></input>
                            </Col>
                            
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default ContactForm;