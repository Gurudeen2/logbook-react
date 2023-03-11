import React from "react";
import Modal from "./Modal";
import classes from "./ModalPopup.module.css";

const ModalAlert = (props) => {
  return (
    <Modal onClose={props.onClose}>
          <div>{ props.header}</div>
          <div>{ props.info}</div>
      <div className={classes.actions}>
        <button onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default ModalAlert;
