import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import CartWidget from '../Cart/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    // <div>
    //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //     <Navbar.Brand href="/">e-comToso</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="mr-auto">
    //         <Nav.Link href="/list">Products</Nav.Link>
    //         <NavDropdown title="Categories" id="collasible-nav-dropdown">
    //           <NavDropdown.Item href="#castle">Castles</NavDropdown.Item>
    //           <NavDropdown.Item href="#pirate">Pirates</NavDropdown.Item>
    //           <NavDropdown.Item href="#aventure">Aventure</NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //       <Nav></Nav>
    //       <Nav>
    //         <Nav.Link href="cart">
    //           <CartWidget />
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </div>

    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">e-comToso</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Link to="/category/pirates" className="navbar-items">
              Pirates
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/category/castles" className="navbar-items">
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
