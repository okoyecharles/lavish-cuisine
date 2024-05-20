export type FetchedMealByFilter = {
  "strMeal": string,
  "strMealThumb": string,
  "idMeal": string
}
export type FetchedMealsByFilter = { "meals": Array<FetchedMealByFilter> };
export type FilterName = 'c' | 'a' | 'i';


export type Meal = {
  id: string;
  name: string;
  thumbnail: string;
}

export type FetchState = 'pending' | 'fulfilled';