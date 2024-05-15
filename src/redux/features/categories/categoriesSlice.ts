import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Category, FetchedCategories } from "./types";
import { FetchState, Meal } from "../types";
import { fetchMealsByFilter } from "..";

export const fetchCategories = createAsyncThunk<FetchedCategories>(
  'categories/fetchCategories',
  async () => {
    const { data } = await axios.get('https://themealdb.com/api/json/v1/1/list.php?c=list');
    return data;
  }
);
export const fetchMealsByCategory = fetchMealsByFilter('categories/fetchMealsByCategory', 'c');

type InitialState = {
  data: Array<{
    category: Category;
    meals: Array<Meal>;
  }>,
  status: {
    value: FetchState,
    categories: { [key: string]: FetchState }
  }
}
const initialState: InitialState = {
  data: [],
  status: {
    value: 'pending',
    categories: {}
  }
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (_) => { });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      const fetchedCategories = action.payload["meals"];

      fetchedCategories.forEach(async (category) => {
        const newCategory = {
          category: {
            id: uuidv4(),
            name: category.strCategory
          },
          meals: [] as Array<Meal>
        };
        state.data.push(newCategory);
        console.log(newCategory.category.id, newCategory.category.name, state.data.length - 1);
      })
    });

    builder.addCase(fetchMealsByCategory.pending, (state, action) => {
      state.status.categories[action.meta.arg.filterValue] = 'pending';
    });
    builder.addCase(fetchMealsByCategory.fulfilled, (state, action) => {
      const fetchedMealsByCategory = action.payload['meals'];
      const categoryIndex = state.data.findIndex((category) => category.category.name === action.meta.arg.filterValue);

      state.data[categoryIndex].meals = fetchedMealsByCategory.map((meal) => ({
        id: meal.idMeal,
        name: meal.strMeal,
        thumbnail: meal.strMealThumb
      }));
      state.status.value = 'fulfilled';
      state.status.categories[action.meta.arg.filterValue] = 'fulfilled';
    })
  }
});

export default categoriesSlice.reducer;
