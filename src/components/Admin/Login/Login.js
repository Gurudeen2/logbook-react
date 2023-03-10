import React from "react";
import { Container, Form, Col, Row, Image } from "react-bootstrap";
import Card from "../../UI/Card";
import LoginForm from "./LoginForm";
import image from "../../../assets/images/log.jpg";

const Login = () => {
  return (
    <Card>
      <Row>
        <Col sm="4">
          <Form>
            <LoginForm />
          </Form>
        </Col>
        <Col sm="8">
          <Image src={image} width="100%" alt="Login Image" />
        </Col>
      </Row>
    </Card>
  );
};
export default Login;
