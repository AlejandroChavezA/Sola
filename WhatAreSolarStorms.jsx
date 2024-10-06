import React, { forwardRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const WhatAreSolarStorms = forwardRef((props, ref) => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Sola</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/info">Info</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section ref={ref} id="what-are-solar-storms" className="content">
        <h2>¿Qué son las tormentas solares?</h2>
        <p>Las tormentas solares son fenómenos que ocurren en la superficie del Sol, generando eyecciones de masa coronal que pueden afectar a la Tierra.</p>
        <p>Estos fenómenos pueden causar auroras boreales y otros impactos en la tecnología y en nuestra vida diaria.</p>
        <p>Aprender sobre estas tormentas es crucial para entender mejor nuestro entorno espacial.</p>
        <p>Las tormentas solares también pueden interferir con comunicaciones y sistemas eléctricos.</p>
        {props.children}
      </section>
    </>
  );
});

export default WhatAreSolarStorms;
