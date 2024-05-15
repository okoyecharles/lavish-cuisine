export type FetchedCategory = {
  "strCategory": string,
}
export type FetchedCategories = { "meals": Array<FetchedCategory> };


export type Category = {
  id: string;
  name: string;
}