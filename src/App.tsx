import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Nav from "./components/Nav";
import Ingredients from "./components/Ingredients";
import Areas from "./components/Areas";
import MealList from "./components/MealList";
import Meal from "./components/Meal";
import PageNotFound from "./components/PageNotFound";

const App: React.FC = () => {
  const [mediaWidth, setMediaWidth] = useState<number>(0);
  window.addEventListener("resize", () => {
    setMediaWidth(window.innerWidth);
  });
  useEffect(() => {
    setMediaWidth(window.innerWidth);
  }, []);

  return (
    <div className="App">
      <Nav mediaWidth={mediaWidth} />
      <Routes>
        <Route path="/" element={<Home />} />
        {mediaWidth > 700 ? (
          <Route
            path="/ingredients/"
            element={<Ingredients mediaWidth={mediaWidth} />}
          >
            <Route path=":ingredient" element={<MealList />} />
          </Route>
        ) : (
          <>
            <Route
              path="/ingredients"
              element={<Ingredients mediaWidth={mediaWidth} />}
            />
            <Route path="/ingredients/:ingredient" element={<MealList />} />
          </>
        )}
        <Route path="/areas" element={<Areas />} />
        <Route path="/areas/:area" element={<MealList />} />
        <Route path="/meal/:meal" element={<Meal />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;

// through each category => category.name => axois.get(`.....c=${category.name}`)
