import React, { useState, useContext } from "react";
import { Form, Col, Row, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import AuthContext from "../../store/auth-context";
import ModalAlert from "../../UI/ModalPopup";
import { FormProvider, useForm } from "react-hook-form";
import image from "../../../assets/images/log.jpg";

const Login = () => {
  const navigate = useHistory();
  const methods = useForm();
  const [header, setHeader] = useState();
  const [content, setContent] = useState();
  const [showModal, setShowModal] = useState(false);

  const authCtx = useContext(AuthContext);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const onSubmitHandler = (data) => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDhWhFfRLQcjt9b32VWS-UdafLsURRjBQ8",
      {
        method: "POST",
        body: JSON.stringify({
          email: data.username,
          password: data.password,
          returnSecureToken: true,
        }),
        header: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((res) => {
            let errorMsg = "Authentication Failed!";
            throw new Error(errorMsg);
          });
        }
      })
      .then((res) => {
        const expirationTime = new Date(
          new Date().getTime() + +res.expiresIn * 1000
        );
        authCtx.login(res.idToken, expirationTime.toISOString());
        navigate.replace("/viewlogs");
      })
      .catch((err) => {
        setHeader("Login");
        setContent(err.message);
        showModalHandler();
      });
  };

  return (
    <Row>
      <Col sm="4">
        {showModal && (
          <ModalAlert
            header={header}
            content={content}
            onClose={hideModalHandler}
          />
        )}

        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmitHandler)}>
            <h4>Login</h4>
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
