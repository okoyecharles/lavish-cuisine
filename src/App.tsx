import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Nav from "./components/Nav";
import Ingredients from "./components/Ingredients";
import Areas from "./components/Areas";
import MealList from "./components/MealList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients/" element={<Ingredients />} >
          <Route path=":ingredient" element={<MealList />} />
        </Route>
        <Route path="/areas" element={<Areas />} />
        <Route path="/areas/:area" element={<MealList />} />
      </Routes>
    </div>
  );
};

export default App;

// through each category => category.name => axois.get(`.....c=${category.name}`)
