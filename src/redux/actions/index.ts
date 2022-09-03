import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as actionType from '../actionTypes';

interface meal {
  strCategory: string
}

const formatCategories = (categories: { meals: meal[] }) => {
  const formatted = categories.meals.map(meal => ({ name: meal.strCategory }));
  return formatted;
}

const fetchCategories = createAsyncThunk(
  actionType.FETCH_CATEGORIES,
  async () => {
    const { data } = await axios.get('https://themealdb.com/api/json/v1/1/list.php?c=list');
    return formatCategories(data);
  }
)

export default fetchCategories;
