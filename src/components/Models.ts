import store from "../redux/configureStore";

// CATEGORIES

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface Category {
  name: string;
  meals: Meal[];
}
export type CategoriesT = Category[];

// INGREDIENTS
export interface Ingredient {
  id: string;
  name: string;
  description: string;
}
export type IngredientsT = Ingredient[];

// AREAS
export interface Area {
  name: string;
}
export type AreasT = Area[];

export interface MealListItem {
  id: string;
  name: string;
  image: string;
  error?: string;
}

export type MealListT = MealListItem[];

export interface MealT {
  dateModified: string | null;
  idMeal: string | null;
  strArea: string | null;
  strCategory: string | null;
  strCreativeCommonsConfirmed: string | null;
  strDrinkAlternate: string | null;
  strImageSource: string | null;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strIngredient16: string | null;
  strIngredient17: string | null;
  strIngredient18: string | null;
  strIngredient19: string | null;
  strIngredient20: string | null;
  strInstructions: any;
  strMeal: string | null;
  strMealThumb: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null; 
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strMeasure16: string | null;
  strMeasure17: string | null;
  strMeasure18: string | null;
  strMeasure19: string | null;
  strMeasure20: string | null;
  strSource: any;
  strTags: string | null;
  strYoutube: any;
}

// APP STATE

export interface AppState {
  categoriesLoaded: boolean;
  ingredientsLoaded: boolean;
  areasLoaded: boolean;
  mealListLoaded: {
    name: string,
    base: string,
  }
}

// Global Redux States
export type RootState = ReturnType<typeof store.getState>;

export interface ReduxAction {
  type: string,
  payload?: any,
}
