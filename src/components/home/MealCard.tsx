import React from "react";
import { useNavigate } from "react-router-dom";
import { toSnakeCase } from "../../utils/utils";
import { clearMeal } from "../../redux/features/meals/mealSlice";
import { useAppDispatch } from "../../hooks/redux";
import { Meal } from "../../redux/features/types";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  meal: Meal;
}

const MealCard: React.FC<Props> = ({ meal }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <li>
      <div className="meal__card">
        <header className="meal__content">
          <h3>{meal.name}</h3>
        </header>
        <button
          className="meal__cardInfo"
          aria-label={`view recipe - ${meal.name}`}
          onClick={() => {
            dispatch(clearMeal());
            navigate(`/meal/${toSnakeCase(meal.name)}`);
          }}
        >
          <FaArrowRightLong />
        </button>
        <img src={`${meal.thumbnail}/preview`} alt={toSnakeCase(meal.name)} />
      </div>
    </li>
  );
};

export default MealCard;
