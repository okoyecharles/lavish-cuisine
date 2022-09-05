import React from "react";
import { Meal } from "./Models";
import "../styles/MealCard.css";
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { formatString } from "../utils/utils";
import { clearMealInfo } from "../redux/actions";
import { useDispatch } from "react-redux";

interface Props {
  meal: Meal;
}

const MealCard: React.FC<Props> = ({ meal }) => {
  const dispatch = useDispatch();
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
            dispatch(clearMealInfo());
            navigate(`/meal/${formatString(meal.strMeal)}`);
          }}
        />
      </div>
    </div>
  );
};

export default MealCard;
