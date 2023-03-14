import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Form } from "react-bootstrap";
import ForgetPasswordForm from "./ForgetPasswordForm";

const ForgetPassword = () => {
  const methods = useForm();

  const verifyMail = async (data) => {
    const body = {
      service_id: "service_bhj0dj9",
      template_id: "template_4266rip",
      user_id: "RWW4ceiL2At5kTAKE",
      template_params: {
        from_name: "James",
        to_name: "akeemtolani2@gmail.com",
        message: "content msg",
        reply_to: "don't reply to this image",
      },
    };

    emailjs.send("service_bhj0dj9", "template_4266rip", {
      from_name: "Tolani MCAN",
      to_name: "akeemtolani2@gmail.com",
      message: "content msg",
      reply_to: "don't reply to this image",
    });
    const sendEmail = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Context-Type": "application/json",
        },
      }
    );
  };
  return (
    <FormProvider {...methods}>
      <Form>
        <ForgetPasswordForm />
      </Form>
    </FormProvider>
  );
};

export default ForgetPassword;
