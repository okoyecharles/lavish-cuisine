import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import "../styles/MealList.css";
import { formatCount, reverseSnakeCase, toSnakeCase } from "../utils/utils";
import { TailSpin } from "react-loader-spinner";
import {
  clearMeals,
  fetchMealsByArea,
  fetchMealsByIngredient,
} from "../redux/features/meals/mealsSlice";
import { clearMeal } from "../redux/features/meals/mealSlice";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineNoMeals } from "react-icons/md";

const MealList = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();
  const meals = useAppSelector((state) => state.meals);
  const stats = useMemo(() => {
    const statsMap = {
      mealCount: 0,
    };
    meals.data.forEach(() => {
      statsMap.mealCount += 1;
    });
    return statsMap;
  }, [meals.data]);

  useEffect(() => {
    dispatch(clearMeals());
    if (params.ingredient) {
      dispatch(fetchMealsByIngredient({ filterValue: params.ingredient }));
    } else if (params.area) {
      dispatch(fetchMealsByArea({ filterValue: params.area }));
    }
  }, [JSON.stringify(params)]);

  return (
    <div className="meal__list-container">
      <section className="meal__list">
        <button
          className="back-button desktop-hidden"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back to previous page
        </button>
        <div className="meal__listInfo">
          <p>
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjB0bm12OGJ4YmxuNGVodTJ2Nmw2OThhNW96eXdpZTlsOGJrdWdoMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PDK9v6n0IJRHs9MnPB/giphy.gif"
              alt="pie"
              height={48}
              width={48}
            />
            <span>{formatCount(stats.mealCount, "meal", "meals")}</span>
          </p>
        </div>
        <ul>
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
              <li className="meal__item" key={meal.id}>
                <div className="meal__item-image">
                  <img
                    src={meal.thumbnail}
                    alt={toSnakeCase(meal.name)}
                    width={512}
                    height={512}
                  />
                </div>
                <div className="meal__item-content">
                  <h3>{meal.name}</h3>
                  <button
                    onClick={() => {
                      dispatch(clearMeal());
                      navigate(`/meal/${toSnakeCase(meal.name)}`);
                    }}
                  >
                    <FaArrowRightLong />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="meal__list-error">
              <MdOutlineNoMeals />
              <p className="mealList__errorMessage">
                {params.ingredient ? (
                  <>
                    Oops... Can't find a meal made with{" "}
                    {reverseSnakeCase(params.ingredient)}
                  </>
                ) : params.area ? (
                  <>Looks like we have no meals made in "{reverseSnakeCase(params.area)}" areas</>
                ) : (
                  <>There was an error fetching your meals</>
                )}
              </p>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};

export default MealList;
