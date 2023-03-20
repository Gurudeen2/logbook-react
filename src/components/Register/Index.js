import React, { useState, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import SignForm from "./SignForm";
import ModalAlert from "../UI/ModalPopup";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebaseConfig/config";

const Index = () => {
  const methods = useForm();
  const [onShow, setOnShow] = useState(false);
  const [header, setHeader] = useState("");
  const [info, setInfo] = useState("");

  const reset = useRef();

  const onShowHandler = () => {
    setOnShow(true);
  };

  const onHideHandler = () => {
    setOnShow(false);
  };

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "logbook"), {
        logbook: data,
      });

      if (docRef.id !== "") {
        setHeader("Success");
        setInfo("Record Successfully Saved!");
      } else {
        setHeader("Error");
        setInfo("Record Not Saved!");
      }
      // check network error
    } catch (e) {
      setHeader("Error");
      setInfo(e);
    }
    onShowHandler();
    reset.current.reset();
  };

  return (
    <FormProvider {...methods}>
      {onShow && (
        <ModalAlert onClose={onHideHandler} header={header} content={info} />
      )}
      <Form onSubmit={methods.handleSubmit(onSubmit)} ref={reset}>
        <SignForm />
      </Form>
    </FormProvider>
  );
};
export default Index;
