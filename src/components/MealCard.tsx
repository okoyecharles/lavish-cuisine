import React from 'react';
import { Meal } from './Models';
import '../styles/MealCard.css';

interface Props {
  meal: Meal;
}

const MealCard: React.FC<Props> = ({ meal }) => {
  const mealCardStyles: React.CSSProperties = {
    background: `url(${meal.strMealThumb})`,
  };

  return (
    <div className="mealCard" style={mealCardStyles}>
      <h3 className="mealCard__title">{meal.strMeal}</h3>
    </div>
  )
}

export default MealCard;