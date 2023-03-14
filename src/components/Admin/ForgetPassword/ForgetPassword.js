import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Form } from "react-bootstrap";
import ForgetPasswordForm from "./ForgetPasswordForm";
import emailjs from "@emailjs/browser";

const ForgetPassword = () => {
  const methods = useForm();

  const verifyMail = async (data) => {
    let body = {
      from_name: "ADMIN",
      to_name: "MCANNA",
      message: "content msg",
      reply_to: "don't reply to this image",
      send_to: data.email,
    };

    emailjs
      .send(
        `${process.env.REACT_APP_SERVICEID}`,
        `${process.env.REACT_APP_TEMPLATEID}`,
        body,
        `${process.env.REACT_APP_PUBLICSADDRESS}`
      )
      .then((response) => {
        console.log(response.status);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(verifyMail)}>
        <ForgetPasswordForm />
      </Form>
    </FormProvider>
  );
};

export default ForgetPassword;
