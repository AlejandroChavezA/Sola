import React, { forwardRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const WhatAreSolarStorms = forwardRef((props, ref) => {
  return (
    <>
    <></>
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
      <section ref = {ref} id = "what-are-solar-storms" className = "content">
        <h2>¿Qué son las tormentas solares?</h2>
        <p>
        Son tormentas causadas por “tormentas solares”, esas tormentas causan 
        perturbaciones mayores al campo magnético de la Tierra. Todo esto produce efectos 
        como interrupciones en la radio, apagones de energía,  y muy hermosas auroras.
        </p>

        h
        {props.children}
      </section>
    </>
  );
});

export default WhatAreSolarStorms;
