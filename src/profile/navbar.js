import React from "react";
import 'bootstrap';
import { Navbar, Container, Nav } from 'react-bootstrap';
const NavBar = () => {
 return (
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Profile">Profile</Nav.Link>
      <Nav.Link href="#Notifications">Notifications</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
 );
};
export default NavBar;
