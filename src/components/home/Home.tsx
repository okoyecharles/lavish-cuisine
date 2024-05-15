import React, { useEffect } from "react";
import HomeRow from "./HomeRow";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import "../../styles/Home.css";
import { fetchCategories, fetchMealsByCategory } from "../../redux/features/categories/categoriesSlice";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories);

  useEffect(() => {
    if (categories.status.value !== 'fulfilled') {
      dispatch(fetchCategories());
    }
  }, []);

  useEffect(() => {
    // fetch meals for each category
    if (categories.data.length && categories.status.value !== 'fulfilled') {
      categories.data.forEach((category, index) => {
        // fetch every 5ms
        setTimeout(() => dispatch(fetchMealsByCategory({ filterValue: category.category.name })), 25);
      })
    }
  }, [categories.data]);

  return (
    <div className="home__container">
      <main className="home">
        {categories.data.map((category) => (
          <HomeRow category={category} key={category.category.id} />
        ))}
      </main>
    </div>
  );
};

export default Home;
