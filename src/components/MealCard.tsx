import React from 'react';
import { Meal } from './Models';
import '../styles/MealCard.css';

interface Props {
  meal: Meal;
}

const MealCard: React.FC<Props> = ({ meal }) => {
  const mealCardStyles: React.CSSProperties = {
    boxShadow: 'inset 0 15em rgba(0, 0, 0, .5)',
    height: '15em',
    background: `url(${meal.strMealThumb})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    aspectRatio: '1',
    color: '#fff',
  };

  return (
    <div className="mealCard" style={mealCardStyles}>
      <h3 className="mealCard__title">{meal.strMeal}</h3>
    </div>
  )
}

export default MealCard;