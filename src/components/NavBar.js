import React from 'react'
import { Navbar , Nav , Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div style={{ marginBottom:'20px' }} >
     <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#add">Add Movie</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}
