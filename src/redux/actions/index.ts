import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Category } from "../../components/Models";
import * as actionType from '../actionTypes';

interface meal {
  strCategory: string
}

interface formattedMeal {
  name: string
}

interface rawIngredient {
  idIngredient: string,
  strIngredient: string,
  strDescription: string,
  strType?: any,
}

interface Area {
  strArea: string
}

interface RawMealListItem {
  strMeal: string,
  strMealThumb: string,
  idMeal: string,
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
  const fetchedCategories: Category[] = [];
  for (let category of categories) {
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

// Set states loaded state to true
export const updateCategoriesLoaded = () => ({
  type: actionType.UPDATE_CATEGORIES_LOADED,
})

export const updateIngredientsLoaded = () => ({
  type: actionType.UPDATE_INGREDIENTS_LOADED,
})

export const updateAreasLoaded = () => ({
  type: actionType.UPDATE_AREAS_LOADED,
})

export const updateMealListLoaded = (payload: {
  name: string,
  base: string,
}) => ({
  type: actionType.UPDATE_MEAL_LIST_LOADED,
  payload,
})

const formatIngredients = (ingredients: rawIngredient[]) => {
  const formattedIngredients = ingredients.map(ingredient => ({
    id: ingredient.idIngredient,
    name: ingredient.strIngredient,
    description: ingredient.strDescription,
  }))
  return formattedIngredients;
}

export const fetchIngredients = createAsyncThunk(
  actionType.FETCH_INGREDIENTS,
  async () => {
    const { data } = await axios.get('https://themealdb.com/api/json/v1/1/list.php?i=list');
    return formatIngredients(data.meals);
  }
)

const formatAreas = (areas: Area[]) => {
  const formatedAreas = areas.map((area) => ({
    name: area.strArea,
  }))
  return formatedAreas;
}

export const fetchAreas = createAsyncThunk(
  actionType.FETCH_AREAS, async () => {
    const { data } = await axios.get('https://themealdb.com/api/json/v1/1/list.php?a=list');
    return formatAreas(data.meals);
  }
);

const formatMealList = (mealList: RawMealListItem[]) => {
  const formattedMealList = mealList.map(meal => ({
    id: meal.idMeal,
    name: meal.strMeal,
    image: meal.strMealThumb,
  }))

  return formattedMealList;
}

export const fetchMealList = createAsyncThunk(
  actionType.FETCH_MEAL_LIST, async ({ name, base }: {
    name: string,
    base: string,
  }) => {
  const { data } = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?${base}=${name}`);
  return formatMealList(data.meals);
}
)

export const fetchMealInfo = createAsyncThunk(
  actionType.FETCH_MEAL_INFO,
  async (name: string | undefined) => {
    const { data: { meals } } = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${name}`);
    return meals[0];
  }
)

export const clearMealList = () => ({
  type: actionType.CLEAR_MEAL_LIST,
});


export const clearMealInfo = () => ({
  type: actionType.CLEAR_MEAL_INFO,
});

