import { DetailedMeal, FetchedDetailedMealType } from "./types";

export const formatMealDetails = (fetchedDetailedMeal: FetchedDetailedMealType | null) => {
  if (fetchedDetailedMeal === null) return null;
  const detailedMeal: DetailedMeal = {
    id : fetchedDetailedMeal.idMeal,
    name : fetchedDetailedMeal.strMeal,
    thumbnail : fetchedDetailedMeal.strMealThumb,
    instructions : fetchedDetailedMeal.strInstructions || null,
    area : fetchedDetailedMeal.strArea || null,
    category : fetchedDetailedMeal.strCategory || null,
    youtube : fetchedDetailedMeal.strYoutube || null,
    cookbook : fetchedDetailedMeal.strSource || null,
    ingredients_measurements : []
  };

  // push available ingredients and measurements
  for (let i = 1; i <= 20; i++) {
    const ingredient = fetchedDetailedMeal[`strIngredient${i}`] || null;
    const measurement = fetchedDetailedMeal[`strMeasure${i}`] || null;
    if (ingredient && measurement) {
      detailedMeal.ingredients_measurements.push([ingredient, measurement])
    }
  }

  return detailedMeal;
}