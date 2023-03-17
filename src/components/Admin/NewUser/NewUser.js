import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import NewUserForm from "./NewUserForm";

const NewUser = () => {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log("Register/NewUser", data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <NewUserForm />
      </Form>
    </FormProvider>
  );
};
export default NewUser;
