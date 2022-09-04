import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoryNames, loadCategories, updateCategoriesLoaded } from "../redux/actions";
import HomeRow from "./HomeRow";
import { v4 } from "uuid";
import '../styles/Home.css';
import { useAppSelector } from "../hooks";
import { CategoriesT } from "./Models";

const Home: React.FC = () => {
  const dispatch = useDispatch<any>();
  const [categoryNamesLoaded, setCategoryNamesLoaded] = useState<boolean>(false);


  const categories: CategoriesT = useAppSelector(state => state.categories);
  const appState = useAppSelector(state => state.appState);

  useEffect(() => {
    if (appState.categoriesLoaded) return;

    if (!categoryNamesLoaded) {
      dispatch(fetchCategoryNames());
      setCategoryNamesLoaded(true);
    }
    if (categories.length) {
      dispatch(loadCategories(categories));
      dispatch(updateCategoriesLoaded());
    }
  });

  return (
    <main className="home">
      {categories?.map((category) => (
        <HomeRow key={v4()} category={category} />
      ))}
    </main>
  );
};

export default Home;
