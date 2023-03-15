import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Form } from "react-bootstrap";
import ForgetPasswordForm from "./ForgetPasswordForm";
import emailjs from "@emailjs/browser";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig/config";
import ModalAlert from "../../UI/ModalPopup";

const ForgetPassword = () => {
  const methods = useForm();
  const [show, setShow] = useState(false);
  const [header, setHeader] = useState();
  const [content, setContent] = useState();

  const hideModalHandler = () => {
    setShow(false);
  };

  const verifyMail = async (data) => {
    await getDocs(collection(db, "users")).then((logdoc) => {
      const newData = logdoc.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      
      const verifiedUser = newData.filter((user) => user.email === data.email);
      if (verifiedUser.length > 0) {
        let body = {
          from_name: "ADMIN",
          to_name: "MCANNA",
          message: verifiedUser[0].password,
          reply_to: "don't reply to this email",
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
            if (response.status === "200") {
              setContent("Password sent to the entered email");
              setHeader("Email Sent");
            }
          })
          .catch((err) => {
            setContent(`${err}`);
            setHeader("Error");
          });
      } else {
        setContent("Email entered is incorrect, Please enter the correct one");
        setHeader("Error");
      }
    });
    setShow(true);
  };
  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(verifyMail)}>
        {show && (
          <ModalAlert
            header={header}
            content={content}
            onClose={hideModalHandler}
          />
        )}
        <ForgetPasswordForm />
      </Form>
    </FormProvider>
  );
};

export default ForgetPassword;
