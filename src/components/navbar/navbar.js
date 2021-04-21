import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <Navbar expand="md" fixed="top">
            <Container>
  <Navbar.Brand href="#home">YA.</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link as={Link} to= '/'>Home</Nav.Link>
                        <Nav.Link  as={Link} to= '/About'>About</Nav.Link>
                        <Nav.Link href="#link">Projects</Nav.Link>
                        <Nav.Link href="#link">Resume</Nav.Link>
    </Nav>
                </Navbar.Collapse>
                </Container>
</Navbar>
    )
}