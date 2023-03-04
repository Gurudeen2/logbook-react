import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import SignForm from "./SignForm";

const Index = () => {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log("Register/Index", data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <SignForm />
      </Form>
    </FormProvider>
  );
};
export default Index;
