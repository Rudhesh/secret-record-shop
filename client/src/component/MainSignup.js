import React, { useState } from "react";
import "./MainSignup.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button, TextField } from "@material-ui/core";
import { CartState } from "../Context/Context";
import AlertBox from "../components/Player/AlertBox";

const MainSignup = () => {
  const { login, setLogin, login1, setLogin1 } = CartState();

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = login;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("http://localhost:9002/mainsignup", login)
        .then((res) => {
          alert(res.data.message);
          history.push("/mainlogin");
        })
        .catch((e) =>
          alert(
            e.response.data.errors.map((e) => {
              return e.msg;
            })
          )
        );
    } else {
      // alert("invlid input");
      setLogin(false);
    }
  };

  return (
    <div className="register">
      {login ? <div></div> : <AlertBox />}

      {console.log("User", login)}
      <h1>Register</h1>
      <Form.Control
        type="text"
        name="name"
        value={login.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></Form.Control>
      <Form.Control
        type="text"
        name="email"
        value={login.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></Form.Control>
      <Form.Control
        type="password"
        name="password"
        value={login.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></Form.Control>
      <Form.Control
        type="password"
        name="reEnterPassword"
        value={login.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></Form.Control>
      <div className="d-grid gap-2">
        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={register}
        >
          Signup
        </Button>
        <div>or</div>
        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={() => history.push("/mainlogin")}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default MainSignup;
