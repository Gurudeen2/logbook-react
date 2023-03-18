import React from "react";
// import imgMeal from "../../assets/images/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header
      className={classes.header}
    >
      <h1>{props.title}</h1>
      {/* <HeaderCartButton onShowCart={props.onShowCart} /> */}
    </header>
  );
};

export default Header;
