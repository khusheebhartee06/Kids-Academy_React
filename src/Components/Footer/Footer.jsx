import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css';
import { faFacebookF,faGooglePlusG,faDribbble,faTwitter,faPinterest } from '@fortawesome/free-brands-svg-icons';

const img_footer = [
  {
    img: "./img/footer_post_01.jpg"
  },
  {
    img: "./img/footer_post_02.jpg"
  }, {
    img: "./img/footer_post_03.jpg"
  }
]
const icon_footer = [
  {
    bgColor: "bg-yellow",
    text: "Raritas etiam processus them dynamicus sequitur mutatem education theme",
    time: "23 seconds ago"
  },
  {
    bgColor: "bg-red",
    text: "Duis autem veleum iriu dolor hendrerit in vulputate velit",
    time: "8 seconds ago"
  }, {
    bgColor: "bg-orange",
    text: "@frankdoe amber tempor cum soluta nobis eleifend",
    time: "2 years ago"
  }
]
function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="footer-title">
                <img src={'./img/logo.png'} alt="" className="img-fluid" />
              </div>
              <p>Distily enable team driven services through extensive is a relatonships platforms with interactive content. Enthusiastically scale effective.</p>
              <ul className='list-unstyled social-icon'>
                <li >
                  <span className='text-yellow'><FontAwesomeIcon icon={faHome} /></span>
                  New Chokoya Road, USA.

                </li>
                <li >
                  <span className='text-red'><FontAwesomeIcon icon={faPhone} /></span>
                  +8801 923 970 212, 0125897

                </li>
                <li >
                  <span className='text-orange'><FontAwesomeIcon icon={faEnvelope} /></span>

                  Contact@admin LabArtisan
                </li>
                <li >
                  <span className='text-purple'><FontAwesomeIcon icon={faGlobeAsia} /></span>
                  Email@admin LabArtisan

                </li>
              </ul>
            </Col>

            <Col lg={3} md={6}>
              <div className="footer-title">
                <h2 className='text-yellow fw-bold'>Latest News        </h2>

                <ul className='list-unstyled footer-img'>
                  {
                    img_footer.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link to="/">
                            <img src={item.img} alt="" className="img-fluid" />
                          </Link>
                          <div>
                            <p>  <Link to='/' className='text-decoration-none text-muted'>    Corem psum dolor the amectetuer adipiscing..</Link>
                            </p>
                            <i className='text-yellow'>04 February 2021
                            </i>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-title">
                <h2 className='text-red fw-bold'>Twitter Widget </h2>

                <ul className='list-unstyled footer-icon'>
                  {
                    icon_footer.map((item, index) => {
                      return (
                        <li key={index}>
                          <span className={` ${item.bgColor}`}>
                            <FontAwesomeIcon icon={faTwitter} />
                          </span>
                          <div>
                            <p>  <Link to='/' className='text-decoration-none text-muted'>   {item.text}</Link>
                            </p>
                            <i className='text-red'>{item.time}</i>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-title">
                <h2 className='text-orange fw-bold'>Recent Photos</h2>
                <ul className="list-unstyled photos">
                  <li>
                    <img src={'./img/footer_gallery_01.jpg'} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={'./img/footer_gallery_02.jpg'} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={'./img/footer_gallery_03.jpg'} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={'./img/footer_gallery_04.jpg'} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={'./img/footer_gallery_05.jpg'} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={'./img/footer_gallery_06.jpg'} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={'./img/footer_gallery_07.jpg'} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={'./img/footer_gallery_08.jpg'} alt="" className="img-fluid" />
                  </li>
                  <li>
                    <img src={'./img/footer_gallery_09.jpg'} alt="" className="img-fluid" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>

      </footer>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <p>© 2021. Designed By <Link to="/">LabArtisan</Link> </p>
            </Col>
            <Col md={6} xs={12}>
              <ul className="social-default">
                <li>
                  <Link to="/" className='bg-blue'><FontAwesomeIcon icon={faFacebookF} /></Link>
                </li>
                <li>
                  <Link to="/" className='bg-pink'><FontAwesomeIcon icon={faDribbble} /></Link>
                </li>
                <li>
                  <Link to="/" className='bg-red'><FontAwesomeIcon icon={faGooglePlusG} /></Link>
                </li>
                <li>
                  <Link to="/" className='bg-lightblue'><FontAwesomeIcon icon={faTwitter} /></Link>
                </li>
                <li>
                  <Link to="/" className='bg-brown'><FontAwesomeIcon icon={faPinterest} /></Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer;