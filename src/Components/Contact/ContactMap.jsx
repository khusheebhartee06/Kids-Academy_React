import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function ContactMap() {
    return (
        <React.Fragment>
            <section className="ContactMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d46830150.998557456!2d-119.80930200000002!3d44.242365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1734863202094!5m2!1sen!2sbd" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <section className="Contact-subscribe">
                <Container>
                    <Row>
                        <Col lg={5} md={12} xs={12}>
                            <h3 className="h2 text-white fw-bold">Join Our Newsletter</h3>
                        </Col>
                        <Col lg={7} md={12} xs={12}>
                            <form method='post'>
                                <input type="email" name="email" id="email" placeholder='Enter your e-mail here' />
                                <input type="submit" value="Subscribe Now" />
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default ContactMap