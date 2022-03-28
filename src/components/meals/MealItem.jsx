import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/CartContext";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { meal } = props;
  const price = `$${meal.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price} </div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
