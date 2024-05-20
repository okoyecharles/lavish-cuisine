import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/Nav";
import Ingredients from "./components/ingredients/Ingredients";
import Areas from "./components/areas/Areas";
import MealList from "./components/meals/MealList";
import Meal from "./components/meal/Meal";
import PageNotFound from "./components/PageNotFound";
import useMediaWidth from "./hooks/useMediaWidth";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import {
  fetchCategories,
  fetchMealsByCategory,
} from "./redux/features/categories/categoriesSlice";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  const mediaWidth = useMediaWidth();

  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories);
  useEffect(() => {
    if (categories.status.value !== "fulfilled") {
      dispatch(fetchCategories());
    }
  }, []);

  useEffect(() => {
    // fetch meals for each category
    if (categories.data.length && categories.status.value !== "fulfilled") {
      categories.data.forEach((category) => {
        // fetch every 5ms
        setTimeout(
          () => dispatch(fetchMealsByCategory({ filterValue: category.category.name })),
          25
        );
      });
    }
  }, [categories.data]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {mediaWidth > 700 ? (
          <Route path="/ingredients/" element={<Ingredients />}>
            <Route path=":ingredient" element={<MealList />} />
          </Route>
        ) : (
          <>
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/ingredients/:ingredient" element={<MealList />} />
          </>
        )}
        <Route path="/areas" element={<Areas />} />
        <Route path="/areas/:area" element={<MealList />} />
        <Route path="/meal/:meal" element={<Meal />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

// through each category => category.name => axois.get(`.....c=${category.name}`)
