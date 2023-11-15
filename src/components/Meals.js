import React, { useEffect, useState } from "react";
import axios from "axios";
import MealItems from "./MealItems";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  const BASE_URL = "http://localhost:3001/meals"; // Use http instead of https
  useEffect(() => {
    const getMeals = async () => {
      try {
        // Use 'await' to wait for the axios request to complete
        const res = await axios.get(BASE_URL);
        // Update state with the received data
        setLoadedMeals(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItems key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
