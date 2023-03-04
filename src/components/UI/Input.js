import React from "react";

const Input = (props) => {
  <div className="">
    <label htmlFor={props.label}>{props.label}</label>
    <input ref={ref} {...props.input} />
  </div>;
};
export default Input;
