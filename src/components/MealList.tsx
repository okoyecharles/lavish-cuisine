import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { fetchMealList } from "../redux/actions";
import { MealListT } from "./Models";
import { IoArrowForwardOutline } from "react-icons/io5";
import { SiCoffeescript } from "react-icons/si";
import "../styles/MealList.css";
import { formatString } from "../utils/utils";
import { TailSpin } from "react-loader-spinner";

const MealList = () => {
  const navigate = useNavigate();
  const params = useParams<string>();
  const dispatch = useDispatch<any>();
  const mealList: MealListT = useAppSelector((state) => state.mealList);
  const { mealListLoaded } = useAppSelector((state) => state.appState);

  useEffect(() => {
    if (params.ingredient) {
      dispatch(fetchMealList({ name: params.ingredient, base: "i" }));
    } else if (params.area) {
      dispatch(fetchMealList({ name: params.area, base: "a" }));
    }
  }, [mealListLoaded]);

  return (
    <ul className="mealList">
      {mealList.length && !mealList[0].error ? (
        mealList.map((meal) => (
          <li className="mealList__item" key={meal.id}>
            <img src={meal.image} alt={meal.name} />
            <h3>{meal.name}</h3>
            <IoArrowForwardOutline
              className="mealList__itemForward"
              onClick={() => {
                navigate(`/meal/${formatString(meal.name)}`);
              }}
            />
          </li>
        ))
      ) : mealList[0]?.error ? (
        <>
          <SiCoffeescript className="mealList__errorIcon" />
          <h2 className="mealList__errorMessage">We're very sorry but no meal matches the provided ingredient</h2>
        </>
      ) : (
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
      )}
    </ul>
  );
};

export default MealList;
