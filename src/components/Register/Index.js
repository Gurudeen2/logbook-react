import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import SignForm from "./SignForm";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebaseConfig/config";

const Index = () => {
  const methods = useForm();
  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "logbook"), {
        logbook: data,
      });
      console.log("Document written with ID: ", docRef);

      // check network error
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
