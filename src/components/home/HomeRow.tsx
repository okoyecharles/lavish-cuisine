import React from "react";
import MealCard from "./MealCard";
import { ThreeDots } from "react-loader-spinner";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import { Category } from "../../redux/features/categories/types";
import { Meal } from "../../redux/features/types";

interface Props {
  category: {
    category: Category;
    meals: Meal[];
  };
}

const FlipAnimation = keyframes`
  from {
    opacity: 0;
    transform: rotateX(-60deg);
  }

  to {
    opacity: 1;
    transform: rotateX(0);
  }
`;

const HomeRow: React.FC<Props> = ({ category: { category, meals } }) => {
  return (
    <section className="home__row">
      <header>
        <h2>{category.name}</h2>
      </header>
      <ul data-loading={!meals.length}>
        {meals.length ? (
          meals.map((meal) => <MealCard meal={meal} key={meal.id} />)
        ) : (
          <li className="home__row-loader" aria-label="loading meals">
            <ThreeDots
              radius="9"
              color="#c0841d"
              wrapperStyle={{}}
              visible={true}
            />
          </li>
        )}
      </ul>
    </section>
  );
};

export default HomeRow;
