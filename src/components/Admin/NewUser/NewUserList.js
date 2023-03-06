import React from "react";
import { FormProvider, useForm } from "react-hook-form"
import NewUserForm from "./NewUserForm";

const NewUserList = () => {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log("Register/NewUserList", data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <NewUserForm />
      </Form>
    </FormProvider>
  );
};
export default NewUserList;
