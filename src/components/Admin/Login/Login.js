import React from "react";
import { Container, Form, Col, Row, Image } from "react-bootstrap";
import Card from "../../UI/Card";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Card>
      <Row>
        <Col sm="6">
          <Form>
            <LoginForm />
          </Form>
        </Col>
        <Col sm="6">
          <Image src="" width="100%" alt="Login Image" />
        </Col>
      </Row>
    </Card>
  );
};
export default Login;
