import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { fetchMealList } from "../redux/actions";
import { MealListT } from "./Models";
import { IoArrowForwardOutline } from "react-icons/io5";
import "../styles/MealList.css";

const MealList = () => {
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
      {mealList?.map((meal) => (
        <li className="mealList__item" key={meal.id}>
          <img src={meal.image} alt={meal.name} />
          <h3>{meal.name}</h3>
          <IoArrowForwardOutline className="mealList__itemForward"/>
        </li>
      ))}
    </ul>
  );
};

export default MealList;
