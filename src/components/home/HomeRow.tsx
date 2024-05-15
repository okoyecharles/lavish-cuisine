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
  const homeRowLoadingStyles: React.CSSProperties = {
    display: "grid",
    placeItems: "center",
  };
  return (
    <section className="home__row">
      <header>
        <h2>{category.name}</h2>
      </header>
      <ul style={meals.length ? {} : homeRowLoadingStyles}>
        {meals.length ? (
          meals.map((meal) => <MealCard meal={meal} key={meal.id} />)
        ) : (
          <li>
            <ThreeDots
              height="150"
              width="150"
              radius="9"
              color="#c0841d"
              ariaLabel="three-dots-loading"
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
