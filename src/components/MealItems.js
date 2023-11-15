import React from "react";
import Button from "./UI/Button";
import { CurrencyFormatter } from "../util.js/CurrencyFormatter";
const MealItems = ({ meal }) => {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3001/${meal.image}`} alt="" />
        {console.log(`http://localhost:3001/${meal.image}`)}

        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            <CurrencyFormatter amount={meal.price} />
          </p>

          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-action">
          {/* <Button>add to cart</Button> */}
          <button className="button">add to cart</button>
        </p>
      </article>
    </li>
  );
};

export default MealItems;
