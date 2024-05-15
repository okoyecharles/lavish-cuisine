import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import "../styles/Ingredients.css";
import { useNavigate, useOutlet } from "react-router-dom";
import { formatString } from "../utils/utils";
import { fetchIngredients } from "../redux/features/ingredients/ingredientsSlice";
import { Ingredient } from "../redux/features/ingredients/types";
import { clearMeals } from "../redux/features/meals/mealsSlice";

interface IngredientsProps {
  mediaWidth: number;
}

const Ingredients: React.FC<IngredientsProps> = ({ mediaWidth }) => {
  const outlet = useOutlet();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const ingredients = useAppSelector((state) => state.ingredients);

  const [searchValue, setSearchValue] = useState<string>("");
  const searchedIngredients = useMemo(() => {
    const matchesSearch = (ingredient: Ingredient) => {
      return ingredient.name.toLowerCase().includes(searchValue.toLowerCase());
    };
    return ingredients.data.filter(matchesSearch);
  }, [searchValue]);

  useEffect(() => {
    if (ingredients.status !== "fulfilled") {
      dispatch(fetchIngredients());
    }
  }, []);

  const ingredientsStyles: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: ".5em",
  };

  return (
    <main className="ingredients">
      <section
        className="ingredients__col1"
        style={mediaWidth > 700 ? { width: "50%" } : { flex: "1" }}
      >
        <div className="ingredients__header">
          <input
            type="text"
            placeholder="Search meals by ingredient..."
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </div>

        <div className="ingredients__container" style={ingredientsStyles}>
          {searchValue.length > 0 &&
            searchedIngredients.map((ingredient) => (
              <span
                key={ingredient.id}
                className="ingredient"
                onClick={() => {
                  // TODO: prevent reload for the same ingredient
                  dispatch(clearMeals());
                  navigate(`./${formatString(ingredient.name)}`);
                }}
              >
                {ingredient.name}
              </span>
            ))}
          {searchValue.length <= 0 && (
            <h3 style={{ textAlign: "center", width: "100%", color: "#543a0d" }}>
              Please input at least a letter to search <br /> ...Then click on a searched
              ingredient
            </h3>
          )}
        </div>
      </section>

      {mediaWidth > 700 && (
        <section className="ingredients__col2" style={{ width: "50%" }}>
          {outlet || (
            <h2>Click a searched ingredient to display more information about it.</h2>
          )}
        </section>
      )}
    </main>
  );
};

export default Ingredients;
