import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients, updateIngredientsLoaded } from "../redux/actions";
import { State } from "./Models";

const Ingredients: React.FC = () => {
  const dispatch = useDispatch<any>();
  const appState = useSelector((state: State) => state.appState);
  let ingredients = useSelector((state: State) => state.ingredients);

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

  const ingredientStyles: React.CSSProperties = {
    background: "#d3d3d3",
    padding: ".25em .5em",
    borderRadius: ".35em",
  };

  ingredients = ingredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <main className="ingredients">
      <div className="ingredients__header">
        <input
          type="text"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </div>

      <div className="ingredients__container" style={ingredientsStyles}>
        {searchValue.length > 0 && ingredients?.map((ingredient) => (
          <span className="ingredient" style={ingredientStyles}>
            {ingredient.name}
          </span>
        ))}
        {searchValue.length <= 0 && (
          <h3>Please input at least one value to search</h3>
        )}
      </div>
    </main>
  );
};

export default Ingredients;
