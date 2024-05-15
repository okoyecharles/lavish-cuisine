import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IoArrowForwardOutline } from "react-icons/io5";
import { SiCoffeescript } from "react-icons/si";
import "../styles/MealList.css";
import { formatString } from "../utils/utils";
import { TailSpin } from "react-loader-spinner";
import {
  fetchMealsByArea,
  fetchMealsByIngredient,
} from "../redux/features/meals/mealsSlice";
import { clearMeal } from "../redux/features/meals/mealSlice";

const MealList = () => {
  const [mediaWidth, setMediaWidth] = useState<number>(0);
  window.addEventListener("resize", () => {
    setMediaWidth(window.innerWidth);
  });
  useEffect(() => {
    setMediaWidth(window.innerWidth);
  }, []);

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();
  const meals = useAppSelector((state) => state.meals);

  useEffect(() => {
    if (params.ingredient) {
      dispatch(fetchMealsByIngredient({ filterValue: params.ingredient }));
    } else if (params.area) {
      dispatch(fetchMealsByArea({ filterValue: params.area }));
    }
  }, [params]);

  return (
    <>
      {mediaWidth <= 700 && (
        <h2
          className="mealList__back"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back to previous page
        </h2>
      )}
      <ul className="mealList">
        {meals.status.value === "pending" ? (
          <TailSpin
            height="150"
            width="150"
            color="#c0841d"
            ariaLabel="tail-spin-loading"
            radius="2"
            wrapperStyle={{
              marginInline: "auto",
              marginTop: "5em",
              opacity: "0.5",
            }}
            wrapperClass=""
            visible={true}
          />
        ) : meals.data.length ? (
          meals.data.map((meal) => (
            <li className="mealList__item" key={meal.id}>
              <img src={meal.thumbnail} alt={meal.name} />
              <h3>{meal.name}</h3>
              <IoArrowForwardOutline
                className="mealList__itemForward"
                onClick={() => {
                  dispatch(clearMeal());
                  navigate(`/meal/${formatString(meal.name)}`);
                }}
              />
            </li>
          ))
        ) : (
          <>
            <SiCoffeescript className="mealList__errorIcon" />
            <h2 className="mealList__errorMessage">
              We're very sorry but no meal matches the provided ingredient
            </h2>
          </>
        )}
      </ul>
    </>
  );
};

export default MealList;
