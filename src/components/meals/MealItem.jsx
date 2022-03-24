import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const { meal } = props;
  const price = `$${meal.price.toFixed(2)}`;
  return (
    <li>
      <div className={classes.meal}>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price} </div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
