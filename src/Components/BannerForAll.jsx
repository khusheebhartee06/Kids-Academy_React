import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BannerForAll({props}) {
    return (
        <section className="BannerForAll section-notch position-relative ">
            <div className="overlay p-120">
                <Container>
                    <h3 className='fs-1 fw-bold'>{props.heading}</h3>
                    <div className='fs-5 fst-italic'>
                        <Link to='/'className='text-white'>Home</Link> - {props.val}
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default BannerForAll