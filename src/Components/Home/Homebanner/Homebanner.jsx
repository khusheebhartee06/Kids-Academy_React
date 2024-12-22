import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Homebanner() {
  return (
    <section className="Homebanner section-notch">
    <Carousel >
      <Carousel.Item interval={7000}>
       <img src={'./img/banner_01.jpg'} alt="First slide"className='img-fluid' />
        <Carousel.Caption className=' text-start'>
          <h3 className='font-36 fw-bold animate__animated animate__slideInUp'>Welcome to KidsAcademy</h3>
          <h1 className='font-66 fw-bold animate__animated animate__slideInUp animate__slow'>Best For Education</h1>
          <p className='pb-3 animate__animated animate__slideInUp text-white'>Monotonely principle centered ahitectures through and standards <br /> magnetic  metrics whereas
          cross functional products..</p>
          <div className='animate__animated animate__slideInUp animate__slower'>
            <a href="#Homeachievements"className='bg-purple'>Read more</a>
            <Link to='/'className='bg-yellow'>Buy Now</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img src={'./img/banner_02.jpg'} alt="Second slide"className='img-fluid' />
      <Carousel.Caption className=' text-start'>
      <h3 className='font-36 fw-bold animate__animated animate__slideInUp'>Welcome to KidsAcademy</h3>
          <h1 className='font-66 fw-bold animate__animated animate__slideInUp animate__slow'>Best For Education</h1>
          <p className='pb-3 animate__animated animate__slideInUp text-white'>Monotonely principle centered ahitectures through and standards <br /> magnetic  metrics whereas
          cross functional products..</p>
          <div className='animate__animated animate__slideInUp animate__slower'>
            <Link to='/'className='bg-purple'>Read more</Link>
            <Link to='/'className='bg-yellow'>Buy Now</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src={'./img/banner_03.jpg'} alt="Third slide"className='img-fluid' />
        <Carousel.Caption className=' text-start'>
        <h3 className='font-36 fw-bold animate__animated animate__slideInUp'>Welcome to KidsAcademy</h3>
          <h1 className='font-66 fw-bold animate__animated animate__slideInUp animate__slow'>Best For Education</h1>
          <p className='pb-3 animate__animated animate__slideInUp text-white'>Monotonely principle centered ahitectures through and standards <br /> magnetic  metrics whereas
          cross functional products..</p>
          <div className='animate__animated animate__slideInUp animate__slower'>
            <Link to='/'className='bg-purple'>Read more</Link>
            <Link to='/'className='bg-yellow'>Buy Now</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  )
}

export default Homebanner;