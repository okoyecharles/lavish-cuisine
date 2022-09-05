import React from "react";
import { Meal } from "./Models";
import "../styles/MealCard.css";
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { formatString } from "../utils/utils";

interface Props {
  meal: Meal;
}

const MealCard: React.FC<Props> = ({ meal }) => {
  const navigate = useNavigate();
  const mealCardStyles: React.CSSProperties = {
    background: `url(${meal.strMealThumb})`,
  };

  return (
    <div className="mealCard" style={mealCardStyles}>
      <div className="mealCard__content">
        <h3 className="mealCard__title">{meal.strMeal}</h3>
        <MdArrowForwardIos
          className="mealCard__arrow"
          onClick={() => {
            navigate(`/meal/${formatString(meal.strMeal)}`);
          }}
        />
      </div>
    </div>
  );
};

export default MealCard;
