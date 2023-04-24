import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>Formations</Nav.Link>
                        <Nav.Link>Experiences</Nav.Link>
                        <Nav.Link>Projets académiques</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
