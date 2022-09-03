export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface Category {
  name: string;
  meals: Meal[];
}

// Global Redux State
export interface State {
  categories: Category[]
}
