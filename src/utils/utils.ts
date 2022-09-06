import { Meal, MealT } from "../components/Models";

export const formatString = (string: string) =>
  string.toLowerCase().replace(/\s/g, '_');

export const isValidString = (string: string | null) =>
  string !== null && /[A-Za-z\d]/g.test(string)

export const getIngredientMaterials = (object: MealT) => {
  // Convert object to entries..
  let result: any[] = [];
  const arr = Object.entries(object);

  arr.forEach((entry: [string, string]) => {
    if (entry[0].startsWith('strIngredient') && isValidString(entry[1])) {
      let pair = new Array(2);
      pair[0] = entry[1];
      result.push(pair);
    } else if (entry[0].startsWith('strMeasure') && isValidString(entry[1])) {
      const position = parseInt(entry[0].replace('strMeasure', '')) - 1;
      result[position][1] = entry[1];
    }
  })

  return result;
}


/**

object =>
  {
    strIngredient1: "flour",
    strIngredient2: "soda",
    strMeasure1: "1 cup",
    strMeasure2: "2 spoons"
  }

entries => 
[
  ["strIngredient1", "flour"],
  ["strIngredient2", "soda"],
  ["strMeasure1", "1 cup"],
  ["strMeasure2", "2 spoons"]
]
 👆
... forEach entry

result = 
[
  ["flour", "1 cup"],
  ["soda", "2 spoons"],
]
;

strMeasure1
result[0].push("1 cup")
let position = 0

**/