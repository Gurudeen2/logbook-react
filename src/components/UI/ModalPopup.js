import React from "react";
import Modal from "./Modal";
import classes from "./ModalPopup.module.css";

const ModalAlert = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.header}>{props.header}</div>
      <hr />
      <div className={classes.content}>{props.content}</div>
      <hr />
      <div className={classes.actions}>
        <button onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ModalAlert;
