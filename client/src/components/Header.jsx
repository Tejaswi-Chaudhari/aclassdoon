import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css"
import img from "../media/logo.jpg"

function Header() {
    return (
        <div>
            <>
                <Navbar className="navbar">
                    <Image src={img} alt="brand-logo" className="nav-logo" />
                    <LinkContainer to="/">
                        <Navbar.Brand className="name">A Class Doon</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container>

                            <Nav className="components">
                                <LinkContainer to="/about">
                                    <Nav.Link className="link a1">About Us</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/contact">
                                    <Nav.Link className="link">Contact Us</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Container>
                    </Navbar.Collapse>
                </Navbar>
            </>
        </div>
    )
}

export default Header
