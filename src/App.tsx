import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Nav from "./components/Nav";
import Ingredients from "./components/Ingredients";
import Areas from "./components/Areas";
import MealList from "./components/MealList";
import Meal from "./components/Meal";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients/" element={<Ingredients />}>
          <Route path=":ingredient" element={<MealList />} />
        </Route>
        <Route path="/areas" element={<Areas />} />
        <Route path="/areas/:area" element={<MealList />} />
        <Route path="/meal/:meal" element={<Meal />} />
        <Route
          path="*"
          element={
            <h1>
              Sorry page not found. Go back <Link to="/">home</Link>
            </h1>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

// through each category => category.name => axois.get(`.....c=${category.name}`)
