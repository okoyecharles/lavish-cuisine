import React from "react";
import MealCard from "./MealCard";
import { Category } from "./Models";
import "../styles/HomeRow.css";
import { ThreeDots } from "react-loader-spinner";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

interface Props {
  category: Category;
}

const FlipAnimation = keyframes`
  from {
    opacity: 0;
    rotate: x -60deg;
  }

  to {
    opacity: 1;
    rotate: x 0deg;
  }
`;

const HomeRow: React.FC<Props> = ({ category }) => {
  const homeRowLoadingStyles: React.CSSProperties = {
    display: 'grid',
    placeItems: 'center',
  }
  return (
    <Reveal triggerOnce keyframes={FlipAnimation} cascade fraction={0.5}>
    <section className="homeRow">
      <h2>{category.name}</h2>
      <div className="homeRow__items" style={category.meals ? {} : homeRowLoadingStyles}>
        {category.meals ? (
          category.meals.map((meal) => (
            <MealCard meal={meal} key={meal.idMeal} />
          ))
        ) : (
          <ThreeDots
            height="150"
            width="150"
            radius="9"
            color="#c0841d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        )}
      </div>
    </section>
    </Reveal>
  );
};

export default HomeRow;
