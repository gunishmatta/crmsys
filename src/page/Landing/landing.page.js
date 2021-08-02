import React from "react";
import "./landing.style.css";
import { Jumbotron } from "react-bootstrap";
import Login from "../../components/Login/Login.comp";

const Landing = () => {
  return (
    <div className="landing-page bg-info">
      <Jumbotron>
        <Login />
      </Jumbotron>
    </div>
  );
};

export default Landing;
