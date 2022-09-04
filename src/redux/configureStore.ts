import categoriesReducer from "./categories/categories";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import appStateReducer from "./appState/appState";
import ingredientsReducer from "./ingredients/ingredients";
import { areasReducer } from "./areas/areas";
import mealListReducer from "./mealList/mealList";

const store = configureStore ({
  reducer : {
    categories: categoriesReducer,
    appState: appStateReducer,
    ingredients: ingredientsReducer,
    areas: areasReducer,
    mealList: mealListReducer,
  },
  middleware: [thunk]
})

export default store;