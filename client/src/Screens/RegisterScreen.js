import React, { useState } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import Success from "../Components/Success";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  function myFunction() {
    let x = document.getElementById("myInput");
    let y = document.getElementById("myinput");
    if (x.type === "password" && y.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
  }

  async function Register() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        phoneNo,
        password,
        cpassword,
      };
      try {
        setLoading(true);
        const result = (await axios.post("/api/User/register", user)).data;
        setLoading(false);
        setSuccess(true);
        setName("");
        setEmail("");
        setPhoneNo("");
        setPassword("");
        setCpassword("");
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    } else {
      alert("Password not Match");
    }
  }

  return (
    <div>
      {loading && <Loader />}
      <div className="row justify-content-center m-5">
        <div className="col-md-5 shadow mt-5">
          {error && <Error message="Something went wrong, Please try again later." />}
          {success && <Success message="Register Successfully" />}
          <h2>Register</h2>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          ></input>
          <br />
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          ></input>
          <br />
          <input
            type="tel"
            className="form-control"
            placeholder="Enter Phone Number"
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
            required
          ></input>
          <br />
          <input
            type="password"
            className="form-control"
            id="myInput"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <br />
          <input
            type="password"
            className="form-control"
            id="myinput"
            placeholder="Confirm Password"
            value={cpassword}
            onChange={(e) => {
              setCpassword(e.target.value);
            }}
            required
          />
          <br />
          <input type="checkbox" onClick={myFunction} />
          Show Password
          <br />
          <button className="btn btn-primary m-3" onClick={Register}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
