import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Form } from "react-bootstrap";
import ForgetPasswordForm from "./ForgetPasswordForm";
import emailjs from "@emailjs/browser";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig/config";
import ModalAlert from "../../UI/ModalPopup";

const ForgetPassword = () => {
  const methods = useForm();
  const [show, setShow] = useState(false);
  const [header, setHeader] = useState();
  const [content, setContent] = useState();
  const [confirmReg, setConfirmReg] = useState(false);

  const hideModalHandler = () => {
    setShow(false);
  };

  const onSendCodeHandler = (data) => {
    console.log("working");
    // fetch(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDhWhFfRLQcjt9b32VWS-UdafLsURRjBQ8",
    //   {
    //     method: "POST",
    //     body: [
    //       {
    //         requestType: "PASSWORD_RESET",
    //         email: "email",
    //       },
    //     ],
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
  };

  const verifyMail = (data) => {
    const configdata = {
      identifier: data.email,
      continueUri: "http://localhost:3000/admin/forgetpassword",
    };
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=AIzaSyDhWhFfRLQcjt9b32VWS-UdafLsURRjBQ8",
      {
        method: "POST",
        body: JSON.stringify(configdata),
        header: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => {
        if (!res.registered) {
          setContent("No account with this email");
          setHeader("Error");
          setShow(true);
          return;
        }
        setConfirmReg(res.registered);
      })
      .catch((err) => {
        setContent(`${err}`);
        setHeader("Error");
      });
  };
  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(verifyMail)}>
        {show && (
          <ModalAlert
            header={header}
            content={content}
            onClose={hideModalHandler}
          />
        )}
        <ForgetPasswordForm
          Display={confirmReg}
          onSendCode={onSendCodeHandler}
        />
      </Form>
    </FormProvider>
  );
};

export default ForgetPassword;
