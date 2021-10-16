import React, { useEffect, useState } from "react";
import "./MainLogin.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { CartState } from "../Context/Context";
import AlertBox from "../components/Player/AlertBox";
import { Button, TextField } from "@material-ui/core";
import { Form } from "react-bootstrap";

const LOCAL_STORAGE_KEY = "Email/Password";

const MainLogin = ({ setLoginUser1 }) => {
  const {
    state: { favorite },
    login,
    setLogin,
  } = CartState();
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setUser(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login1 = () => {
    axios.post("http://localhost:9002/mainlogin", user).then((res) => {
      alert(res.data.message);

      setLoginUser1(res.data.user);
      history.push("/main");
    });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <Form.Control
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></Form.Control>

      <Form.Control
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></Form.Control>

      <div className="d-grid gap-2">
        <Button variant="contained" color="primary" onClick={login1}>
          Login
        </Button>
        <div>or</div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/mainsignup")}
        >
          Signup
        </Button>
      </div>
    </div>
  );
};

export default MainLogin;
