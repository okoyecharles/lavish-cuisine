import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Area, FetchedAreas } from "./types";
import { FetchState } from "../types";
import { v4 as uuidv4 } from "uuid";

export const fetchAreas = createAsyncThunk<FetchedAreas>(
  'areas/fetchAreas',
  async () => {
    const { data } = await axios.get('https://themealdb.com/api/json/v1/1/list.php?a=list');
    return data;
  }
);

type InitialState = {
  data: Array<Area>,
  status: FetchState
};
const initialState: InitialState = {
  data: [],
  status: 'pending'
};

const areasSlice = createSlice({
  name: 'areas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAreas.pending, (state) => { state.status = 'pending' });
    builder.addCase(fetchAreas.fulfilled, (state, action) => {
      const fetchedAreas = action.payload["meals"];

      const newAreas: Array<Area> = fetchedAreas.map((area) => ({
        id: uuidv4(),
        name: area.strArea
      }));
      state.data = newAreas;
      state.status = 'fulfilled';
    })
  }
})

export default areasSlice.reducer;