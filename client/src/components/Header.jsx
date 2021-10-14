import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css"

function Header() {
    return (
        <div>
            <>
                <Navbar className="navbar">
                    <LinkContainer to="/">
                        <Navbar.Brand className="name">Class Doon</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container>
                            <Nav className="components">
                                <LinkContainer to="/About">
                                    <Nav.Link className="link a1">About Us</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/Contact">
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
