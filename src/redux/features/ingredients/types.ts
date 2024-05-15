export type FetchedIngredient = {
  "strIngredient": string,
}
export type FetchedIngredients = { "meals": Array<FetchedIngredient> };


export type Ingredient = {
  id: string;
  name: string;
}