import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import CartWidget from '../Cart/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">e-comToso</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Link to="/category/pirate" className="navbar-items">
              Pirates
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/category/castle" className="navbar-items">
              Castles
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/category/aventure" className="navbar-items">
              Aventure
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/category/all" className="navbar-items">
              Ver Todas
            </Link>
          </Nav.Item>
        </Nav>
        <Form inline>
          <CartWidget />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
