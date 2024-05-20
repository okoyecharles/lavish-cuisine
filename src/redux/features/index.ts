import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchedMealsByFilter, FilterName } from "./types";


export const fetchMealsByFilter = (typePrefix: string, filterName: FilterName) => createAsyncThunk<FetchedMealsByFilter, {
  filterValue: string
}
>(
  typePrefix,
  async ({ filterValue }) => {
    const FILTER_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php';
    const { data } = await axios.get(`${FILTER_URL}?${filterName}=${filterValue}`);
    data['meals'] = data['meals'] || [];
    return data;
  }
);