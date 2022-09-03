export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface Category {
  name: string;
  meals: Meal[];
}

export interface AppState {
  categoriesLoaded: boolean;
}

// Global Redux States
export interface State {
  categories: Category[]
  appState: AppState
}

export interface ReduxAction {
  type: string,
  payload: any,
}
