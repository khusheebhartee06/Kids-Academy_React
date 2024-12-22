import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Homeabout() {
    return (
        <section className="Homeabout section-notch">
            <div className="overlay p-120">
                <Container>
                    <Row >
                        <Col lg={6}>
                        <img src={"./img/about.png"} alt="img" className="img-fluid" />
                        </Col>
                        <Col lg={6} className='text-center text-lg-start mt-5 mt-lg-0'>
                        <h2 className='fw-bold h1'>About Our KidsAcademy</h2>
                        <p>Enthusiasticay diseminate competitive oportunitie through 
                            transparent an actions Compelngly seize viral schemas through
                             intermandated creative is adiea sources. Enthusiasticay
                              plagiarize clientcentered relationship for the covalent 
                              experiences. Distinctively architect 24/365 service for 
                              wireless is ebusiness ahosfluorescently Efficiently comunicate
                               coperative methods of empowerment awesome athrough Monotonectaly myocardinate cross and functional niche markets and an functional.</p>
                       <div> <Link to='/about'className='bg-purple'>Read more</Link>
                       <Link to='/'className='bg-yellow'>Buy Now</Link></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Homeabout