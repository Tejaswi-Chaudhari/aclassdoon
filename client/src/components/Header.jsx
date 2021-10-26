import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressCard, faUsers } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
import img from "../media/Logo.jpg"


function Header() {
    return (
        <div>
            <>
                <Navbar expand="lg" className="navbar">
                    <Image src={img} alt="brand-logo" className="nav-logo" />
                    <LinkContainer to="/">
                        <Navbar.Brand className="name display-6"><b>A Class Doon</b></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container>
                            <Nav className="components">
                                <LinkContainer to="/about">
                                    <Nav.Link className="link a1"><FontAwesomeIcon icon={faUsers} />  About Us</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/contact">
                                    <Nav.Link className="link"> <FontAwesomeIcon icon={faAddressCard} />  Contact Us</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Container>
                    </Navbar.Collapse>
                </Navbar>
                <hr></hr>
            </>
        </div>
    )
}

export default Header
