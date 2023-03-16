import React, { useState, useContext } from "react";
import { Form, Col, Row, Image } from "react-bootstrap";
// import { getDocs, collection } from "firebase/firestore";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import AuthContext from "../../store/auth-context";
import ModalAlert from "../../UI/ModalPopup";
import { FormProvider, useForm } from "react-hook-form";
// import { db } from "../../firebaseConfig/config";
import image from "../../../assets/images/log.jpg";

const Login = () => {
  const navigate = useHistory();
  const methods = useForm();
  const [header, setHeader] = useState();
  const [content, setContent] = useState();
  const [showModal, setShowModal] = useState(false);

  const authctx = useContext(AuthContext);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const onSubmitHandler = async (data) => {
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
        console.log("1 then", res);
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
        console.log("2 then", res);

        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate.replace("/viewlogs");
      })
      .catch((err) => {
        setHeader("Login");
        setContent(err.message);
        showModalHandler();
      });

    // await getDocs(collection(db, "users")).then((userdoc) => {
    //   const newData = userdoc.docs.map((user) => ({
    //     ...user.data(),
    //     id: user.id,
    //   }));
    //   let usersData = [];
    //   for (let key in newData) {
    //     usersData.push({
    //       id: newData[key].id,
    //       username: newData[key].username,
    //       email: newData[key].email,
    //       password: newData[key].password,
    //       lastlogin: newData[key].lastlogin,
    //     });
    //   }
    //   const verifiedLogins = usersData.filter((login) => {
    //     const loginCheck =
    //       (login.username === data.username &&
    //         login.password === data.password) ||
    //       (login.email === data.username && login.password === data.password);
    //     return loginCheck;
    //   });
    //   if (verifiedLogins.length > 0) {
    //     // localStorage.setItem("auth", true);
    //     navigate.push("/viewlogs");
    //   } else {
    //     setHeader("Failed");
    //     setContent("Incorrect Username or Email");
    //     showModalHandler();
    //   }
    // });
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
