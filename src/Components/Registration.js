import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Instance from "./Instance";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// import '../Login.css';

const Registration = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [password, setPassword] = useState("");
  let [password_confirmation, setPassword_confirmation] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("");
  let [role, setRole] = useState("");
  let[file, setFile] =useState("");
  const navigate = useNavigate("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  const registrationSubmit = () => {
    var obj = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      password_confirmation: password,
      dob: dob,
      gender: gender,
      role: role,
    };
    Instance.post("/registration", obj)
      .then((resp) => {
        var token = resp.data.token;
        console.log(token);
        localStorage.setItem("token", token);
        if(token == "No user found"){
        navigate("/registration");
        }else{
            navigate('/otp');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      class="container mt-5"
      style={{ backgroundColor: "#EBEDEF", width: "500px", border: "outset" }}
    >
      <h2>Registration</h2>
      <Form onSubmit={handleSubmit}>
        <div class="form-group" onChange={(e) => setName(e.target.value)}>
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            placeholder="Enter name"
          />
        </div>
        <div class="form-group" onChange={(e) => setEmail(e.target.value)}>
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
          />
        </div>
        <div
          class="form-group"
          onChange={(e) => setPhoneNumber(e.target.value)}
        >
          <label for="phone">Phone No.</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            name="phone"
            placeholder="Enter phone no."
          />
        </div>
        <div class="form-group" onChange={(e) => setPassword(e.target.value)}>
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div
          class="form-group"
          onChange={(e) => setPassword_confirmation(e.target.value)}
        >
          <label for="password_confirmation">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="Confirm Password"
          />
        </div>
        <div class="form-group" onChange={(e) => setDob(e.target.value)}>
          <label for="dob">Date of Birth</label>
          <input
            type="date"
            class="form-control"
            id="dob"
            name="dob"
            placeholder="Date of Birth"
          />
        </div>
        <div class="form-group p-1" onChange={(e) => setGender(e.target.value)}>
          <label for="gender">Gender</label>
          <input type="radio" name="gender" value="male" />
          Male
          <input type="radio" name="gender" value="female" />
          Female
          <input type="radio" name="gender" value="other" />
          Other
        </div>
        <div class="form-group p-1" onChange={(e) => setRole(e.target.value)}>
          <label for="role">Role</label>
          <select name="role" id="role">
            <option value="">Select Role</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
            <option value="pharmacist">Pharmacist</option>
          </select>
        </div>
        <div
          class="form-group p-1"
          onClick={registrationSubmit}
          disabled={!validateForm()}
        >
          <span>
            <input
              type="submit"
              name="submit"
              value="Sign up"
              class="btn btn-info"
              style={{ background: "#31D2F2", padding: "10px", width: "100% " }}
            />
            {/* <Link to="/otp">Registration OTP</Link> */}
          </span>
        </div>
        <div class="form-group p-1">
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </Form>
    </div>
  );
};
export default Registration;
