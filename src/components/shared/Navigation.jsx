/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/Calendy logo.svg";

function Navigation() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="fixed-top"
      >
        <Container className="nav-container-width">
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} width={180} alt="Calendly Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fw-bold">
              <Nav.Link className="mx-4">
                <Link className="nav-link" to="/individuals">
                  Individuals
                </Link>
              </Nav.Link>
              <Nav.Link className="mx-4">
                <Link className="nav-link" to="/teams">
                  Teams
                </Link>
              </Nav.Link>
              <Nav.Link className="mx-4">
                <Link className="nav-link" to="/enterprise">
                  Enterprise
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
