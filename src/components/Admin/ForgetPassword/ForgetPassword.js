import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Form } from "react-bootstrap";
import ForgetPasswordForm from "./ForgetPasswordForm";

const ForgetPassword = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Form>
        <ForgetPasswordForm />
      </Form>
    </FormProvider>
  );
};

export default ForgetPassword;
