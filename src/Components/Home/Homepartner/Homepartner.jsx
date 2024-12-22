import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const partnerItem = [
    {
        img: "./img/partner_01.jpg"
    }, {
        img: "./img/partner_02.jpg"
    }, {
        img: "./img/partner_03.jpg"
    }, {
        img: "./img/partner_04.jpg"
    }, {
        img: "./img/partner_05.jpg"
    },
]

function Homepartner() {
    return (
        <section className="Homepartner section-notch">
            <div className="partner-overlay p-120">
                <div className="partner-header">
                    <h3 className="fw-bold h1">Our Partners Logo</h3>
                    <p>Rapidiously expedite granular imperatives before economically sound web services. Credibly
                        actualize pandemic strategic themeplatform.</p>
                </div>
                <Container className='px-5 px-sm-0'>
                    <Row className='row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-3 '>
                        {
                            partnerItem.map((item, index) => {
                                return (
                                    <Col className='pe-2 p-0  mx-auto'>
                                        <img src={item.img} alt="" className="img-fuild" width="100%" />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Homepartner;