import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as actionType from '../actionTypes';

interface meal {
  strCategory: string
}

interface formattedMeal {
  name: string
}

// Fetch names for each category
const formatCategoryNames = (categories: { meals: meal[] }) => {
  const formatted = categories.meals.map(meal => ({ name: meal.strCategory }));
  return formatted;
}

export const fetchCategoryNames = createAsyncThunk(
  actionType.FETCH_CATEGORY_NAMES,
  async () => {
    const { data } = await axios.get('https://themealdb.com/api/json/v1/1/list.php?c=list');
    return formatCategoryNames(data);
  }
)

// Fetch categories based on fetched category names
const fetchCategories = async (categories: formattedMeal[]) => {
  const fetchedCategories: {}[] = [];
  for ( let category of categories) {
    const fetchedCategory = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category.name}`);
    fetchedCategories.push(fetchedCategory.data);
  }
  return fetchedCategories;
}

// Dispatch fetched categories to redux store
export const loadCategories = createAsyncThunk(
  actionType.LOAD_CATEGORIES,
  async (categories: formattedMeal[]) => {
    const data = await fetchCategories(categories);
    return data;
  }
)


// categories => loadcategories => dispatch to store;

// {name: 'beef' meals: [...]}

// [number, string][]