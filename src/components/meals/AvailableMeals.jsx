import React, { useState, useEffect, useCallback } from "react";
import { DUMMY_MEALS } from "../meals";
import Card from "../ui/Card";
import MealItem from "./MealItem";
import useHttp from "../../hooks/useHttp";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const transformMeals = useCallback((mealsObj) => {
    const loadedMeals = [];
    for (const mealKey in mealsObj) {
      loadedMeals.push({
        id: mealKey,
        name: mealsObj[mealKey].name,
        description: mealsObj[mealKey].description,
        price: mealsObj[mealKey].price,
      });
    }
    setMeals(loadedMeals);
  }, []);

  const { isLoading, error, sendRequest: fetchMeals } = useHttp(transformMeals);

  useEffect(() => {
    fetchMeals({
      url: "https://food-ordering-app-26828-default-rtdb.firebaseio.com/meals.json",
    });
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  let content = mealsList;
  if (error) {
    content = <p className={classes.error}>error.message</p>;
  }
  if (isLoading) {
    content = "Loading Meals...";
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
