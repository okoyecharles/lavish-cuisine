import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryNames, loadCategories } from "../redux/actions";

const Home: React.FC = () => {
  const dispatch = useDispatch<any>();
  const [categoryNamesLoaded, setCategoryNamesLoaded] = useState<boolean>(false);
  const [categoriesLoaded, setCategoriesLoaded] = useState<boolean>(false);

  const categories = useSelector((state : any) => state.categories);

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
  return <div>Home</div>;
};

export default Home;
