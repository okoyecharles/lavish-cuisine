import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { fetchMealInfo } from "../redux/actions";
import { MealT } from "./Models";
import { AiFillYoutube } from "react-icons/ai";
import { BsJournalBookmark } from "react-icons/bs";
import "../styles/Meal.css";

const Meal: React.FC = () => {
  const params = useParams<string>();
  const dispatch = useDispatch<any>();

  const meal: MealT = useAppSelector((state) => state.meal);

  useEffect(() => {
    dispatch(fetchMealInfo(params.meal));
  }, []);

  return (
    <main className="meal">
      <header className="meal__header">
        <h1>{meal?.strMeal}</h1>
        <span>{meal?.strArea}</span>
      </header>
      <section className="meal__measurements">
        <h2>Requirements</h2>
        <div className="meal__measurementsContainer">
          <div className="col1">
            <div>Ingredient</div>
            {Object.entries(meal)?.map((entry: [string, string]) => {
              if (entry[0].startsWith("strIngredient") && !!entry[1]) {
                return <div>{entry[1]}</div>;
              }
            })}
          </div>
          <div className="col2">
            <div>Measurement</div>
            {Object.entries(meal)?.map((entry: [string, string]) => {
              if (entry[0].startsWith("strMeasure") && !!entry[1]) {
                return <div>{entry[1]}</div>;
              }
            })}
          </div>
        </div>
      </section>
      <section className="meal__instructions">
        <h2>Preparation</h2>
        <pre
          className="meal__instructionsContainer"
          dangerouslySetInnerHTML={{ __html: meal?.strInstructions }}
        >
          {}
        </pre>
      </section>
      <section className="meal__help">
        <h2>Still Confused?</h2>
        <div>
          <a href={meal.strYoutube}>
            <AiFillYoutube />
          </a>
          <a href={meal.strSource}>
            <BsJournalBookmark />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Meal;
