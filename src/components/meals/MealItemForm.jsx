import React, { useState, useRef } from "react";
import Input from "../ui/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 &&
      enteredAmount < 1 &&
      enteredAmount > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
    setAmountValid(true);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: 10,
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Entered valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
