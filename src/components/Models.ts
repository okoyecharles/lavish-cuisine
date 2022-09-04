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
}

export type MealListT = MealListItem[];

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
