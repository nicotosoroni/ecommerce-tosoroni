import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from '../Cart/CartWidget';

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">e-comToso</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/list">Products</Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#castle">Castles</NavDropdown.Item>
              <NavDropdown.Item href="#pirate">Pirates</NavDropdown.Item>
              <NavDropdown.Item href="#aventure">Aventure</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav></Nav>
          <Nav>
            <Nav.Link href="#cart">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
