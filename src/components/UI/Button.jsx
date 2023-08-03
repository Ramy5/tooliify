import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={`${props.className} ${classes.button}`}>
      <span>{props.children}</span>
    </div>
  );
};

export default Button;
