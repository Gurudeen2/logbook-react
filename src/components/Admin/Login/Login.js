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
      {showModal && (
        <ModalAlert
          header={header}
          content={content}
          onClose={hideModalHandler}
        />
      )}

      <Col xs="5" sm="4" md="4" lg="2">
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmitHandler)}>
            <LoginForm />
          </Form>
        </FormProvider>
      </Col>
      <Col xs="7" sm="8" md="8" lg="10">
        <Image src={image} width="100%" alt="Login Image" />
      </Col>
    </Row>
  );
};
export default Login;
