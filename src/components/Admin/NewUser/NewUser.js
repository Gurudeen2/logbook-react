import React, { useState, useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { Form } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import NewUserForm from "./NewUserForm";
import { db } from "../../firebaseConfig/config";
import ModalAlert from "../../UI/ModalPopup";

const NewUser = () => {
  const methods = useForm();

  const [onShow, setOnShow] = useState(false);
  const [header, setHeader] = useState("");
  const [info, setInfo] = useState("");

  const reset = useRef();
  const date = new Date();
  const onShowHandler = () => {
    setOnShow(true);
  };

  const onHideHandler = () => {
    setOnShow(false);
  };

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "newmembers"), {
        newmember: {
          Fullname: data.fullname,
          Gender: data.gender,
          NextofKin: data.nextofkin,
          NextofKinNo: data.nextofkinno,
          PPA: data.ppa,
          Refer: data.refer,
          State: data.state,
          Type: data.type,
          Telephone: data.telno,
          Date: date.toLocaleString(),
        },
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
        <NewUserForm />
      </Form>
    </FormProvider>
  );
};
export default NewUser;
