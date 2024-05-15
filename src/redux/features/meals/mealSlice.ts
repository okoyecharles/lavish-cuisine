import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchState } from "../types";
import { DetailedMeal, FetchedDetailedMeal } from "./types";
import { formatMealDetails } from "./formatData";

type InitialState = {
  data: DetailedMeal | null,
  status: FetchState
};
const initialState: InitialState = {
  data: null,
  status: 'pending'
};

export const fetchDetailedMeal = createAsyncThunk<FetchedDetailedMeal, { name: string }>(
  'meal/fetchMealDetails',
  async ({ name }) => {
    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    return data;
  }
);

const mealSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    clearMeal: (state) => {
      state = initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetailedMeal.pending, (state) => { state.status = 'pending' });
    builder.addCase(fetchDetailedMeal.fulfilled, (state, action) => {
      const [ fetchedDetailedMeal ] = action.payload['meals'];
      const newDetailedMeal = formatMealDetails(fetchedDetailedMeal);

      state.data = newDetailedMeal;
      state.status = 'fulfilled';
    })
  }
})

export const { clearMeal } = mealSlice.actions;
export default mealSlice.reducer;