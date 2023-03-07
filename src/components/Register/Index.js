import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import SignForm from "./SignForm";
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebaseConfig/config";

const Index = () => {
  // https://mcandb-b70a4-default-rtdb.firebaseio.com/
  const methods = useForm();
  const onSubmit = (data) => {
    const ref = collection(firestore, "test_data"); // Firebase creates this automatically
    let data2 = {
      testData: data,
    };
    try {
      addDoc(ref, data2).then((res) => {
        console.log("success", res.firestore);
      });
    } catch (err) {
      console.log("line 18---register/index.js", err);
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
