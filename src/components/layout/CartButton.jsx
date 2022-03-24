import React from "react";
import CartIcon from "../cart/CartIcon";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>4</span>
    </button>
  );
};

export default CartButton;
