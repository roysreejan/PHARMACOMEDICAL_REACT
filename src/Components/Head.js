import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import { render } from "@testing-library/react";

const Head = () => {
  let [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            {token ? '' : <Nav.Link href="/login">Login</Nav.Link>}
            {token ? '' : <Nav.Link href="/registration">Registration</Nav.Link>}
            {token ? '' : <Nav.Link href="/otp">OTP</Nav.Link>}
            {token ? <Nav.Link href="/homeDoctor">Home</Nav.Link> : ''}
            {token ? <Nav.Link href="/doctorProfile">Profile</Nav.Link> : ''}
            {token ? <Nav.Link href="/doctorFee">Fee</Nav.Link> : ''}
            {token ? <Nav.Link href="/prescriptionsList">PrescriptionsList</Nav.Link> : ''}
            {token ? <Nav.Link href="/signout">Logout</Nav.Link> : ''}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default Head;