import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import "../styles/Ingredients.css";
import { useNavigate, useOutlet } from "react-router-dom";
import { toSnakeCase } from "../utils/utils";
import { fetchIngredients } from "../redux/features/ingredients/ingredientsSlice";
import { Ingredient } from "../redux/features/ingredients/types";

const Ingredients = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const ingredients = useAppSelector((state) => state.ingredients);

  const [searchValue, setSearchValue] = useState<string>("");
  const searchedIngredients = useMemo(() => {
    const matchesSearch = (ingredient: Ingredient) => {
      return ingredient.name.toLowerCase().includes(searchValue.trim().toLowerCase());
    };
    return ingredients.data.filter(matchesSearch);
  }, [searchValue]);

  useEffect(() => {
    if (ingredients.status !== "fulfilled") {
      dispatch(fetchIngredients());
    }
  }, []);

  return (
    <main className="ingredients">
      <section className="ingredients__col1">
        <header className="ingredients__header">
          <input
            type="text"
            placeholder="Search Ingredients"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </header>

        <div className="ingredients__container">
          {searchValue.trim().length <= 0 ? (
            <p>Click on a searched ingredient</p>
          ) : searchedIngredients.length === 0 ? (
            <p>No ingredient matches your search</p>
          ) : (
            searchedIngredients.map((ingredient) => (
              <button
                key={ingredient.id}
                className="ingredient"
                onClick={() => {
                  navigate(`./${toSnakeCase(ingredient.name)}`);
                }}
              >
                {ingredient.name}
              </button>
            ))
          )}
        </div>
      </section>

      <div className="ingredients__col2 mobile-hidden">
        {outlet || <p>Meals cooked with selected ingredient will display here</p>}
      </div>
    </main>
  );
};

export default Ingredients;
