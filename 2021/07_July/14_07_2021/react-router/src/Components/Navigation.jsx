import React, { useState } from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useHistory } from 'react-router-dom';

function Navigation() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  function handleClick() {
    // history.push("/products");
    // alert("123")
  }

  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top" collapseOnSelect>
      <Container>
        <LinkContainer to="/home"><Navbar.Brand href="/home"><i class="fab fa-aviato fa-3x"></i></Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/about"><NavDropdown title="Products" id="basic-nav-dropdown" onMouseLeave={() => setShow(false)} onMouseOver={() => setShow(true)} show={show} onClick={handleClick}>
              <LinkContainer exact to="/products"><NavDropdown.Item>Products</NavDropdown.Item></LinkContainer>
              <LinkContainer exact to="/products/tea"><NavDropdown.Item>Tea</NavDropdown.Item></LinkContainer>
              <LinkContainer exact to="/products/coffee"><NavDropdown.Item>Coffee</NavDropdown.Item></LinkContainer>
              <LinkContainer exact to="/products/chocolate"><NavDropdown.Item>Chocolate</NavDropdown.Item></LinkContainer>
            </NavDropdown></LinkContainer>
            <LinkContainer to="/about"><Nav.Link href="/about">About</Nav.Link></LinkContainer>
            <LinkContainer to="/blog"><Nav.Link href="/blog">Blog</Nav.Link></LinkContainer>
            <LinkContainer to="/contact"><Nav.Link href="/contact">Contact</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation

