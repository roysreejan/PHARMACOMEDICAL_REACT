import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Head = () => {
    return (
        <div>
          <br />
          <Navbar bg="light" variant="light">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/registration">Registration</Nav.Link>
                <Nav.Link href="/homeDoctor">Home</Nav.Link>
                <Nav.Link href="/doctorProfile">Profile</Nav.Link>
                <Nav.Link href="/doctorFee">Fee</Nav.Link>
                <Nav.Link href="/prescriptionsList">Prescriptions List</Nav.Link>
                <Nav.Link href="/signout">SignOut</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      );
    }
export default Head;