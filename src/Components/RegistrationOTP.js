import React, { useState } from "react";
import Instance from "./Instance";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const RegistrationOTP = () => {
  let [otp, setOtp] = useState("");
  const navigate = useNavigate("");

  var obj = { otp: otp };
  Instance.post("/otp", obj)
    .then((resp) => {
      var token = resp.data.token;
      console.log(token);
      localStorage.setItem("token", token);
      // if (token == "Otp Invalid") {
        navigate("/otp");
      // } else {
      //   navigate("/login");
      // }
    })
    .catch((err) => {
      console.log(err);
    });
  function handleSubmit(event) {
    event.preventDefault();
  }
  function otpSubmit(event) {
    event.preventDefault();
  }
  return (
    <div
      class="container mt-5"
      style={{ backgroundColor: "#EBEDEF", width: "500px", border: "outset" }}
    >
      <h2>
        <b>OTP</b>
      </h2>
      <Form onSubmit={handleSubmit}>
        <div class="form-group" onChange={(e) => setOtp(e.target.value)}>
          <label for="otp">OTP</label>
          <input
            type="text"
            class="form-control"
            id="otp"
            name="otp"
            placeholder="Enter otp"
          />
        </div>
        <div class="form-group">
          <span>
            <input
              type="submit"
              name="submit"
              value="Submit"
              class="btn btn-info"
              onClick={otpSubmit}
            />
          </span>
        </div>
      </Form>
    </div>
  );
};
export default RegistrationOTP;
