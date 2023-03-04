import React, { Fragment } from "react";
// import imgMeal from "../../assets/images/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>{props.title}</h1>
        {/* <HeaderCartButton onShowCart={props.onShowCart} /> */}
      </header>

    </Fragment>
  );
};

export default Header;
