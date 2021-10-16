import React from "react";
import { Container } from "react-bootstrap";
import Developer from "./components/Player/Developer";
import "./App.css";
export const About = () => {
  return (
    <Container className="contact">
      <div className="contactDetails">
        <Developer />
      </div>
    </Container>
  );
};
