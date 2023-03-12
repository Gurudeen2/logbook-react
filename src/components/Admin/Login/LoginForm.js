import React, { useState } from "react";
import { Button, Col, Container, Row, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EyeSlashFill, EyeFill } from "react-bootstrap-icons";
import { useFormContext } from "react-hook-form";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const { register } = useFormContext();

  const [showPass, setShowPas] = useState(false);
  const [inputName, setInputName] = useState("password");
  const showPasswordHandler = () => {
    if (inputName === "password") {
      setShowPas(true);
      setInputName("text");
    } else {
      setInputName("password");
      setShowPas(false);
    }
  };

  const checkInputName = (e) => {
    setInputName(e.target.type);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group as={Row} controlId="username">
            <Form.Label column sm="6" className="text-left">
              Username
            </Form.Label>
            <Col sm="12">
              <Form.Control
                type="text"
                name="username"
                placeholder="Username or Email"
                style={{ height: "1.8rem" }}
                required
                {...register("username")}
              />
              <Form.Control.Feedback type="invalid">
                Please enter username ore email!
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
            <Col sm="12">
              <InputGroup className="mb-3">
                <Form.Control
                  type={inputName}
                  name="password"
                  onChange={checkInputName}
                  style={{ height: "1.8rem" }}
                  required
                  {...register("password")}
                />
                <InputGroup.Text onClick={showPasswordHandler}>
                  {showPass ? <EyeFill /> : <EyeSlashFill />}
                </InputGroup.Text>
              </InputGroup>

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
        <Col sm="8"></Col>
        <Col style={{ textAlign: "right" }}>
          <Button variant="success" type="submit">Login</Button>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginForm;
