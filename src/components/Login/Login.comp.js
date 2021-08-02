import React,{useState} from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
const Login = () => {
const [email,setEmail] =  useState('')
  const [password,setPassword] = useState('')

  const handleInput = e =>{
  const {email,password} = e.target.value
    setEmail(email)
    setPassword(password)
  }

  return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Client Login</h1>
            <hr />
            <Form autoComplete="off">
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={handleInput}
                    required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInput}
                    placeholder="password"
                    required
                />
              </Form.Group>

              <Button type="submit">Login</Button>
            </Form>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col>
            <a href="/password-reset">Forget Password?</a>
          </Col>
        </Row>
        <Row className="py-4">
          <Col>
            Are you new here? <a href="/registration">Register Now</a>
          </Col>
        </Row>
      </Container>
  );
};
export default Login;
