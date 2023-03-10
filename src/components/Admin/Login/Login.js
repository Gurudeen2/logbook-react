import React from "react";
import { Form, Col, Row, Image } from "react-bootstrap";
import LoginForm from "./LoginForm";
import { FormProvider, useForm } from "react-hook-form";
import image from "../../../assets/images/log.jpg";

const Login = () => {
  const methods = useForm();

  const onSubmitHandler = (data) => {
    console.log("login details", data);
  };
  return (
    <Row>
      <Col sm="4">
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmitHandler)}>
            <LoginForm />
          </Form>
        </FormProvider>
      </Col>
      <Col sm="8" style={{ height: "100%" }}>
        <Image src={image} width="100%" height="100%" alt="Login Image" />
      </Col>
    </Row>
  );
};
export default Login;
