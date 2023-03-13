import React, { useState } from "react";
import { Form, Col, Row, Image } from "react-bootstrap";
import {
  getDocs,
  collection,
  where,
  updateDoc,
  query,
} from "firebase/firestore";
import LoginForm from "./LoginForm";
import ModalAlert from "../../UI/ModalPopup";
import { FormProvider, useForm } from "react-hook-form";
import { db } from "../../firebaseConfig/config";
import image from "../../../assets/images/log.jpg";

const Login = () => {
  const methods = useForm();
  const [header, setHeader] = useState();
  const [content, setContent] = useState();

  const onSubmitHandler = async (data) => {
    console.log("login details", data);
    const qa = query(
      collection(db, "logbook"),
      where("gender", "=", "Male")
    );
    const docData = await getDocs(qa);
    console.log("userData", docData);

    //   .then((users) => {
    //   const usersData = users.docs.map((user) => ({
    //     ...user.data(),
    //     id: user.id,
    //   }));
    // });

    // await getDocs(collection(db, "users")).then((userdoc) => {
    //   const newData = userdoc.docs.map((user) => ({
    //     ...user.data(),
    //     id: user.id,
    //   }));
    //   let usersData = [];
    //   for (let key in newData) {
    //     usersData.push({
    //       id: newData[key].id,
    //       username: newData[key].users.username,
    //       email: newData[key].users.email,
    //       password: newData[key].users.password,
    //       lastlogin: newData[key].users.lastlogin,
    //     });
    //   }
    //   if (
    //     usersData[0].email === data.username ||
    //     usersData[0].username === data.username
    //   ) {
    //     if (usersData[0].password === data.password) {
    //       setHeader("Success");
    //       setContent("Login Successful");
    //     } else {
    //       console.log("incorrect Password");
    //       setHeader("Failed");
    //       setContent("Incorrect Password");
    //     }
    //   } else {
    //     setHeader("Failed");
    //     setContent("Incorrect Username or Email");
    //   }
    // });
  };

  return (
    <Row>
      <Col sm="4">
        {/* <ModalAlert header content /> */}
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
