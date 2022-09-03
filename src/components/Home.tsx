import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryNames, loadCategories } from "../redux/actions";
import HomeRow from "./HomeRow";
import { State } from "./Models";
import { v4 } from "uuid";
import '../styles/Home.css';

const Home: React.FC = () => {
  const dispatch = useDispatch<any>();
  const [categoryNamesLoaded, setCategoryNamesLoaded] = useState<boolean>(false);
  const [categoriesLoaded, setCategoriesLoaded] = useState<boolean>(false);

  const categories = useSelector((state: State) => state.categories);

  useEffect(() => {
    if (!categoryNamesLoaded) {
      dispatch(fetchCategoryNames());
      setCategoryNamesLoaded(true);
    }
    if (categories.length && !categoriesLoaded) {
      console.log(categories);
      dispatch(loadCategories(categories));
      setCategoriesLoaded(true);
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
