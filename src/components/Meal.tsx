import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { AiFillYoutube } from "react-icons/ai";
import { BsJournalBookmark } from "react-icons/bs";
import "../styles/Meal.css";
import { formatCount, isValidString, splitSteps, toSnakeCase } from "../utils/utils";
import { TailSpin } from "react-loader-spinner";
import { fetchDetailedMeal } from "../redux/features/meals/mealSlice";

const Meal: React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const meal = useAppSelector((state) => state.meal);
  const preparationSteps = splitSteps(meal.data?.instructions || "");

  useEffect(() => {
    dispatch(fetchDetailedMeal({ name: params.meal! }));
  }, []);

  return (
    <main className="meal">
      {meal.status === "pending" ? (
        <TailSpin
          height="128"
          width="128"
          color="var(--color-brown-30)"
          ariaLabel="tail-spin-loading"
          wrapperStyle={{
            marginTop: "25vh",
            display: "grid",
            placeItems: "center",
          }}
          visible={true}
        />
      ) : meal.data ? (
        <>
          <div className="meal__header-container">
            <header className="meal__header">
              <h2>{meal.data.name}</h2>
              <section className="meal__info">
                <p>
                  <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjl6ejVwZHY1OG40YWZ1ZG55cm85YXE0dzl3d2J3Y3d1eWJuMXkzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/dlh7c1N7NqrH1ns4Yf/giphy.gif"
                    alt="earth"
                    height={48}
                    width={48}
                  />
                  <span>{meal.data.area}</span>
                </p>
                <p>
                  <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2t2aHp1cndndDRweGV4NDR5OTkzejNtbWgyejNhaXB2bmE0NG84OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MohQPvwHM9XPc6b9kw/giphy.gif"
                    alt="pizza"
                    height={48}
                    width={48}
                  />
                  <span>{meal.data.category}</span>
                </p>
                <div className="meal__header-image">
                  <img src={meal.data.thumbnail} alt={toSnakeCase(meal.data.name)} />
                </div>
              </section>
            </header>
          </div>

          <div className="meal__content">
            <section className="meal__measurements">
              <h3>Requirements</h3>
              <table>
                <tr>
                  <th>Ingredient</th>
                  <th>Measurement</th>
                </tr>
                {meal.data.ingredients_measurements.map(([ingredient, measurement]) => (
                  <tr>
                    <td>{ingredient}</td>
                    <td>{measurement}</td>
                  </tr>
                ))}
              </table>
            </section>

            <section className="meal__instructions">
              <h3>
                Preparation ({formatCount(preparationSteps.length, "step", "steps")})
              </h3>
              <ul>
                {preparationSteps.map((step) => (
                  <li>{step}</li>
                ))}
              </ul>
            </section>

            {(isValidString(meal.data.youtube) || isValidString(meal.data.cookbook)) && (
              <section className="meal__help">
                <h3>Sources</h3>
                <ul>
                  {meal.data.youtube && (
                    <li>
                      <a href={meal.data.youtube} target="_blank" rel="noreferrer">
                        <AiFillYoutube />
                        <span>Youtube</span>
                      </a>
                    </li>
                  )}
                  {meal.data.cookbook && (
                    <li>
                      <a href={meal.data.cookbook} target="_blank" rel="noreferrer">
                        <BsJournalBookmark />
                        <span>Cookbook</span>
                      </a>
                    </li>
                  )}
                </ul>
              </section>
            )}
          </div>
        </>
      ) : null}
    </main>
  );
};

export default Meal;
