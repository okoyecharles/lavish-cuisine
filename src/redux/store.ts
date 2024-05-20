import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './features/categories/categoriesSlice';
import ingredientsReducer from './features/ingredients/ingredientsSlice';
import areasReducer from './features/areas/areasSlice';
import mealsReducer from './features/meals/mealsSlice';
import mealReducer from './features/meals/mealSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    ingredients: ingredientsReducer,
    areas: areasReducer,
    meals: mealsReducer,
    meal: mealReducer,
  },
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
