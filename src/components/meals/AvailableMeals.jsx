import React from "react";
import { DUMMY_MEALS } from "../meals";
import Card from "../ui/Card";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
