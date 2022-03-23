import React from "react";
import mealsImage from "./meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
