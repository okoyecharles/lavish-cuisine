import React from "react";
import "../../styles/MealCard.css";
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { formatString } from "../../utils/utils";
import { clearMeal } from "../../redux/features/meals/mealSlice";
import { useAppDispatch } from "../../hooks/redux";
import { Meal } from "../../redux/features/types";

interface Props {
  meal: Meal;
}

const MealCard: React.FC<Props> = ({ meal }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <li>
      <div className="meal__card">
        <h3>{meal.name}</h3>
        <img src={`${meal.thumbnail}/preview`} alt={meal.name} />
        <button
          className="meal__cardInfo"
          onClick={() => {
            dispatch(clearMeal());
            navigate(`/meal/${formatString(meal.name)}`);
          }}
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </li>
  );
};

export default MealCard;
