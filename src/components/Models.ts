export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface Category {
  name: string;
  meals: Meal[];
}

export interface Ingredient {
  id: string;
  name: string;
  description: string;
}

export interface Area {
  name: string;
}

export interface AppState {
  categoriesLoaded: boolean;
  ingredientsLoaded: boolean;
  areasLoaded: boolean;
}

// Global Redux States
export interface State {
  categories: Category[]
  appState: AppState
  ingredients: Ingredient[]
  areas: Area[]
}

export interface ReduxAction {
  type: string,
  payload: any,
}
