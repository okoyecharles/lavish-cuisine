import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { useAppSelector } from "../hooks";
import { fetchIngredients, updateIngredientsLoaded } from "../redux/actions";
import { IngredientsT } from "./Models";
import "../styles/Ingredients.css";
import { Outlet, useOutlet } from "react-router-dom";

const Ingredients: React.FC = () => {
  const dispatch = useDispatch<any>();
  const appState = useAppSelector((state) => state.appState);
  let ingredients: IngredientsT = useAppSelector((state) => state.ingredients);

  const outlet = useOutlet();

  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    if (appState.ingredientsLoaded) return;
    dispatch(fetchIngredients());
    dispatch(updateIngredientsLoaded());
  });

  const ingredientsStyles: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: ".5em",
  };

  ingredients = ingredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <main className="ingredients">
      <section className="ingredients__col1">
        <div className="ingredients__header">
          <input
            type="text"
            placeholder="Search an ingredient..."
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </div>

        <div className="ingredients__container" style={ingredientsStyles}>
          {searchValue.length > 0 &&
            ingredients?.map((ingredient) => (
              <span className="ingredient" key={v4()}>
                {ingredient.name}
              </span>
            ))}
          {searchValue.length <= 0 && (
            <h3
              style={{ textAlign: "center", width: "100%", color: "#543a0d" }}
            >
              Please input at least one letter to search
            </h3>
          )}
        </div>
      </section>

      <section className="ingredients__col2">
        {outlet || (<h2>Click a searched ingredient to display more information about it.</h2>)}
      </section>
    </main>
  );
};

export default Ingredients;
