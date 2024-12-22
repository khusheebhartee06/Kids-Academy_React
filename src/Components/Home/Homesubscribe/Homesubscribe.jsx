import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Homesubscribe() {
  return (
<section className="Homesubscribe">
    <Container>
        <Row>
            <Col lg={5} md={12} xs={12}>
            <h3 className="h2 text-white fw-bold">Join Our Newsletter</h3>
            </Col>
            <Col lg={7} md={12} xs={12}>
            <form method='post'>
            <input type="email" name="email" id="email"placeholder='Enter your e-mail here' />
            <input type="submit" value="Subscribe Now" />
            </form>
            </Col>
        </Row>
    </Container>
</section>
)
}

export default Homesubscribe