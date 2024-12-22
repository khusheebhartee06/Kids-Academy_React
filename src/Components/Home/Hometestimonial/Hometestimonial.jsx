import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const testimonialData = [
  {
    bColor: "b-yellow",
    bIcon: "./img/testimonial_icon_01.jpg",
    img: "./img/testimonial_01.jpg"
  }, {
    bColor: "b-red",
    bIcon: "./img/testimonial_icon_02.jpg",
    img: "./img/testimonial_02.jpg"
  }, {
    bColor: "b-orange",
    bIcon: "./img/testimonial_icon_03.jpg",
    img: "./img/testimonial_03.jpg"
  }
]


function Hometestimonial() {
  return (
    <section className="Hometestimonial p-120">
      <div className='testimonial-header'>
        <h3 className="fw-bold text-purple h1">What Parents Say</h3>
        <p>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize
          pandemic strategic themeplatform.</p>
      </div>
      <Container>
        <Row>
          {
            testimonialData.map((item, index) => {
              return (
                <Col lg={4} md={6} sm={12} key={index} className='mb-4 mb-lg-0'>
                  <div className={`parent-item p-4 rounded-3 position-relative ${item.bColor}`}>
                    <p>Professionally predominate that timely infrastriuctures tops line methodlogies
                      Colaboratively seize scalable achannels before longterm high impact</p>
                    <h4 className='fw-bold text-red'>Joly Smith <span className='fs-6  text-muted '><i class="ff-bubblegum "> ui/ux Designer</i></span></h4>
                    <img src={item.bIcon} className="position-absolute top-100 img-fluid" alt="" />
                  </div>
                  <div className="ms-3">
                    <img src={item.img} alt="" className={ `img-fluid rounded-circle  border-4 ms-5 mt-3 position-relative ${item.bColor}`} />
                  </div>
                </Col>
              )
            })
          }

        </Row>
      </Container>
    </section>
  )
}

export default Hometestimonial;