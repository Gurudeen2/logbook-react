import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form.Group as={Row} controlId="username">
            <Form.Label column sm="6" className="text-left">
              Username*
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                name="username"
                style={{ height: "1.8rem" }}
                required
                // {...register("username")}
              />
              <Form.Control.Feedback type="invalid">
                Please enter username!
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group as={Row} controlId="password">
            <Form.Label column sm="6" className="text-left">
              Password
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                name="password"
                style={{ height: "1.8rem" }}
                required
                // {...register("password")}
              />
              <Form.Control.Feedback type="invalid">
                Please enter Password!
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row style={{ paddingTop: "0.4rem" }}>
        <Col>
          <span>
            <Link className={classes.active} to="/admin/forgetpassword">
              Forget Password?
            </Link>
          </span>
        </Col>
      </Row>
      <Row style={{ paddingTop: "0.4rem" }}>
        <Col></Col>
        <Col>
          <Button size="md" variant="success">Login</Button>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginForm;
