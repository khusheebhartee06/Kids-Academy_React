import React from 'react';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const gallery = [
    {
        img: "./img/gallery_01.jpg"
    }, 
    {
        img: "./img/gallery_02.jpg"
    },
     {
        img: "./img/gallery_03.jpg"
    },
     {
        img: "./img/gallery_04.jpg"
    }, 
    {
        img: "./img/gallery_05.jpg"
    },
     {
        img: "./img/gallery_06.jpg"
    },
     {
        img: "./img/gallery_04.jpg"
    }, 
    {
        img: "./img/gallery_05.jpg"
    },
     {
        img: "./img/gallery_06.jpg"
    }
]

function AllGallery() {
    return (
        <section className="Homegallery p-120">
            <Container className='px-5 px-md-0'>
                <Row>
                    {
                        gallery.map((item, index) => {
                            return (
                                <Col lg={4} md={6} key={index} className='p-3'>
                                    <div className="gallery-img">
                                        <img src={item.img} alt="" className="img-fluid" />
                                    </div>
                                    <div className="gallery-overlay bg-purple"></div>
                                    <div className="gallery-content ">
                                        <a href={item.img} target='_blank'><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></a>
                                        <h4 className='fw-bold'>Product Name Here</h4>
                                        <span>By: KidsAcademy Theme</span>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row>
                    <div className="gallery-btn mt-5">
                        <Link to="/gallery"className='bg-purple'>View More Gallery</Link>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default AllGallery;