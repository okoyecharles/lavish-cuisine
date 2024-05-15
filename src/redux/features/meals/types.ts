import { Meal } from "../types";

export type FetchedDetailedMealType = {
  "idMeal": string;
  "strMeal": string;
  "strMealThumb": string;
  "strDrinkAlternate": string | null;
  "strCategory": string | null;
  "strArea": string | null;
  "strInstructions": string | null;
  "strTags": string | null;
  "strYoutube": string | null;
  "strSource": string | null;
  [ingredient: `strIngredient${number}`]: string | null;
  [measure: `strMeasure${number}`]: string | null;
}

export type FetchedDetailedMeal = { "meals": [FetchedDetailedMealType] }


export type DetailedMeal = Meal & {
  instructions: string | null;
  ingredients_measurements: Array<[string, string]>
  area: string | null;
  category: string | null;

  youtube: string | null;
  cookbook: string | null;
}