import { createSlice } from "@reduxjs/toolkit";
import { FetchState, FilterName, Meal } from "../types";
import { fetchMealsByFilter } from "..";

export const fetchMealsByIngredient = 
  fetchMealsByFilter('ingredients/fetchMealsByIngredient', 'i');
export const fetchMealsByArea = 
  fetchMealsByFilter('areas/fetchMealsByArea', 'a');


type InitialState = {
  data: Array<Meal>,
  status: {
    value: FetchState
    filterName: FilterName | null,
    filterValue: string | null,
  }
};
const initialState: InitialState = {
  data: [],
  status: {
    value: 'pending',
    filterName: null,
    filterValue: null
  }
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    clearMeals: (state) => {
      state.data = initialState.data;
      state.status = { ...initialState.status };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMealsByIngredient.pending, (state, action) => {
      state.status = {
        value: 'pending',
        filterName: 'i',
        filterValue: action.meta.arg.filterValue
      }
    })
    builder.addCase(fetchMealsByIngredient.fulfilled, (state, action) => {
      const fetchedMeals = action.payload['meals'];
      const newMeals: Array<Meal> = fetchedMeals.map((meal) => ({
        id: meal.idMeal,
        name: meal.strMeal,
        thumbnail: meal.strMealThumb
      }))
      state.data = newMeals;
      state.status = {
        value: 'fulfilled',
        filterName: 'i',
        filterValue: action.meta.arg.filterValue
      }
    })

    
    builder.addCase(fetchMealsByArea.pending, (state, action) => {
      state.status = {
        value: 'pending',
        filterName: 'a',
        filterValue: action.meta.arg.filterValue
      }
    })
    builder.addCase(fetchMealsByArea.fulfilled, (state, action) => {
      const fetchedMeals = action.payload['meals'];
      const newMeals: Array<Meal> = fetchedMeals.map((meal) => ({
        id: meal.idMeal,
        name: meal.strMeal,
        thumbnail: meal.strMealThumb
      }))
      state.data = newMeals;
      state.status = {
        value: 'fulfilled',
        filterName: 'a',
        filterValue: action.meta.arg.filterValue
      }
    })
  }
})

export const { clearMeals } = mealsSlice.actions;
export default mealsSlice.reducer;