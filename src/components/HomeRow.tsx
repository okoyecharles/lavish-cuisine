import React from 'react'
import MealCard from './MealCard';
import { Category } from './Models';
import '../styles/HomeRow.css';

interface Props {
  category: Category;
}

const HomeRow: React.FC<Props> = ({ category }) => {
  return (
    <section className="homeRow">
      <h2>{category.name}</h2>
      <div className="homeRow__items">
        {category.meals?.map(meal => <MealCard meal={meal} key={meal.idMeal} />)}
      </div>
    </section>
  )
}

export default HomeRow;