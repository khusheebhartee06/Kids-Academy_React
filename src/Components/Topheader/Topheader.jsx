import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome, faRss } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { faFacebookF, faBehance, faDribbble, faSkype, faVimeoV,faPinterest } from '@fortawesome/free-brands-svg-icons';

import './Topheader.css'


function Topheader() {
    return (
        <React.Fragment>
            <section id="Topheader" className='bg-purple text-white'>
                <Container fluid >
                    <Row>
                        <Col className='col-auto '>
                            <p className='text-white'>
                                <FontAwesomeIcon icon={faPhone} />
                                <i> Phone : 8801 234 567 890</i>
                            </p>
                        </Col>
                        <Col className='col-auto'>
                            <p className='text-white'>
                                <FontAwesomeIcon icon={faClock} />
                                <i> Opening Time : 9:30am-5:30pm</i>
                            </p>
                        </Col>
                        <Col className='col-auto'>
                            <p className='text-white'>
                                <FontAwesomeIcon icon={faHome} />
                                <i>  Address : Labartisan 1205 Newyork</i>
                            </p>
                        </Col>
                        <Col className='text-end col-auto ms-auto'>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to="#">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <FontAwesomeIcon icon={faBehance} />
                                </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <FontAwesomeIcon icon={faDribbble} />
                                </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <FontAwesomeIcon icon={faSkype} />
                                </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <FontAwesomeIcon icon={faVimeoV} />
                                </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <FontAwesomeIcon icon={faPinterest} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <FontAwesomeIcon icon={faRss} />
                                    </Link>
                                </li>

                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Topheader