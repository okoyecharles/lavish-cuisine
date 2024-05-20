import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchedIngredients, Ingredient } from "./types";
import { FetchState } from "../types";
import { v4 as uuidv4 } from "uuid";

export const fetchIngredients = createAsyncThunk<FetchedIngredients>(
  'ingredients/fetchIngredients',
  async () => {
    const { data } = await axios.get('https://themealdb.com/api/json/v1/1/list.php?i=list');
    return data;
  }
);

type InitialState = {
  data: Array<Ingredient>,
  status: FetchState
};
const initialState: InitialState = {
  data: [],
  status: 'pending'
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.pending, (state) => { state.status = 'pending' });
    builder.addCase(fetchIngredients.fulfilled, (state, action) => {
      const fetchedIngredients =  action.payload["meals"];

      const newIngredients: Array<Ingredient> =  fetchedIngredients.map((ingredient) => ({
        id: uuidv4(),
        name: ingredient.strIngredient
      }));
      state.data = newIngredients;
      state.status = 'fulfilled';
    })
  }
})

export default ingredientsSlice.reducer;