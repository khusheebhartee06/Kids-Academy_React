import { faFacebookF, faVimeoV, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const teachers = [
    {
        img: "./img/teacher_01.jpg",
        bgColor:"bg-purple",
        name: "Broklyn Doel",
        subject: "Sains Teacher"
    },
    {
        img: "./img/teacher_02.jpg",
        bgColor:"bg-red",
        name: "Alex Jhonson",
        subject: "Art Teacher"
    },
    {
        img: "./img/teacher_03.jpg",
        bgColor:"bg-orange",
        name: "Robot Jhonson",
        subject: "Math Teacher"
    },
    {
        img: "./img/teacher_04.jpg",
        bgColor:"bg-lightblue",
        name: "Janaton Doe",
        subject: " English Teacher"
    }
]

function Hometeachers() {
    return (
        <section className="Hometeachers section-notch">
            <div className="overlay p-120">
                <div className="teachers-header">
                    <h2 className='fw-bold h1'>Meet Our Teachers</h2>
                    <p>Rapidiously expedite granular imperatives before economically sound web services. Credibly
                        actualize pandemic strategic themeplatform.</p>
                </div>
                <Container>
                    <Row className='px-4 px-sm-0'>
                        {
                            teachers.map((item, index) => {
                                return (
                                    <Col lg={6} key={index} className='p-lg-2 pb-4 '>
                                        <div className="row me-2">
                                            <div className="col-5 teachers-img m-0 p-0">
                                                <img src={ item.img} alt="" className="img-fluid w-100 h-100" />
                                            </div>
                                            <div className={`col-7 teachers-content text-white p-20 m-0 ${item.bgColor}`}>
                                                <h4 className='fw-bold mb-3'>{item.name} <span className='f-16 ff-bubblegum fw-normal'>{item.subject}</span></h4>
                                                <ul>
                                                    <li>
                                                        <Link to="#">
                                                            <FontAwesomeIcon icon={faFacebookF} />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <FontAwesomeIcon icon={faVimeoV} />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <FontAwesomeIcon icon={faTwitter} />
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
                                                <p className='text-white my-2'>Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.</p>
                                                <Link to="/">View Portfolio</Link>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                <Row>
                    <div className="teachers-btn  mt-5 text-center">
                        <Link to="/teachers"className='bg-purple '>See More Classes</Link>
                    </div>
                </Row>
                </Container>
            </div>
        </section>
    )
}

export default Hometeachers