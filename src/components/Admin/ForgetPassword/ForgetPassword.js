import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ForgetPasswordForm from "./ForgetPasswordForm";
import ModalAlert from "../../UI/ModalPopup";

const ForgetPassword = () => {
  const methods = useForm();
  const location = useHistory();
  const [show, setShow] = useState(false);
  const [header, setHeader] = useState();
  const [content, setContent] = useState();

  const hideModalHandler = () => {
    setShow(false);
  };

  const onSendCodeHandler = (data) => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDhWhFfRLQcjt9b32VWS-UdafLsURRjBQ8",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: data.email,
        }),

        header: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          setContent("check your mail, A Link as been sent to your mail");
          setHeader("Verification Link");
          setShow(true);
          location.replace("/admin/login");
          return res.json();
        }
      })
      .catch((err) => {
        setContent(`${err}`);
        setHeader("Error");
        setShow(true);
      });
  };

  const verifyMail = async (data) => {
    const configdata = {
      identifier: data.email,
      continueUri: "http://localhost:3000/admin/forgetpassword",
    };

    await fetch(
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
        onSendCodeHandler(data);
      })
      .catch((err) => {
        setContent(`${err}`);
        setHeader("Error");
        setShow(true);
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
        <ForgetPasswordForm />
      </Form>
    </FormProvider>
  );
};

export default ForgetPassword;
