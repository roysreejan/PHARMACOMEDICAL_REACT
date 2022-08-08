import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Instance from "./Instance";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "../Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  const loginSubmit = () => {
    var obj = { email: email, password: password };
    Instance.post("/login", obj)
      .then((resp) => {
        var token = resp.data.token;
        console.log(token);
        localStorage.setItem("token", token);
        if (token == "No user found") {
          navigate("/login");
        } else {
          navigate("/homeDoctor");
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
      <h2>
        <b>Log in</b>
      </h2>
      <Form onSubmit={handleSubmit}>
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
        <div class="form-group" onChange={(e) => setPassword(e.target.value)}>
          <label for="name">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            placeholder="Password"
          />
          <input type="checkbox" name="remember" />
          Remember Me
          <br />
        </div>
        <div
          class="form-group p-1"
          onClick={loginSubmit}
          disabled={!validateForm()}
        >
          <span>
            <input
              type="submit"
              name="submit"
              value="Login"
              class="btn btn-primary"
              style={{ background: "#0f57cd", padding: "10px", width: "100% " }}
            />
            {/* Don't have an account? <Link to="/registration">Signup</Link> */}
          </span>
        </div>
        <div class="form-group p-1">
          <span>
            <a
              href="{{url('auth/facebook')}}"
              class="btn btn-primary"
              style={{
                background: "#3b5998",
                padding: "10px",
                width: "100% ",
                href: "/!",
              }}
              role="button"
            >
              <FontAwesomeIcon icon="fa-brands fa-twitter" />
              Login With Facebook
            </a>
          </span>
        </div>
        <div class="form-group p-1">
          <span>
            <a
              href="{{url('auth/google')}}"
              class="btn btn-danger"
              style={{
                background: "#d34836",
                padding: "10px",
                width: "100% ",
                href: "/!",
              }}
              role="button"
            >
              <FontAwesomeIcon icon="fa-brands fa-google-plus" /> Login With
              Google
            </a>
          </span>
        </div>
      </Form>
    </div>
  );
};
export default Login;
