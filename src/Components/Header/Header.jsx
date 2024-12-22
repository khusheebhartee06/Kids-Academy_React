import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from '../../Api-json/Header/Menu.json'
import './Header.css';


function Mainmenu({ data }) {
    return (
        <>
            <Link to={data.link} className={`nav-link ff-bubblegum ${data.textColor} `}>{data.lable}</Link>
        </>
    )
}
function Submenu({ para }) {
    return (
        <>
            <NavDropdown title={para.lable}  className={para.textColor}>
                {
                    para.dropdownMenu.map((item, index) => {
                        return (
                            <Link to={item.link} className={`dropdown-item fw-semibold ${item.textColor}`} key={index}>{item.lable}</Link>
                        )
                    })
                }
            </NavDropdown>
        </>
    )
}

function Header() {
    return (
        <header className='header sticky-top'>
            <Navbar expand="lg" className="bg-white position-sticky top-0 start-0">
                <Container>
                    <Link to="#home" className='navbar-brand'>
                        <img src='./img/logo.png'className='img-fluid' alt='logo' />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                Menu.map((item, index) => {
                                    if (item.isDropdown == true) {
                                        return (
                                            <Submenu para={item} key={index} />
                                        )
                                    }
                                    return (
                                        <Mainmenu data={item} key={index} />
                                    )
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header