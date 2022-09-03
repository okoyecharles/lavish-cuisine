import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Nav from "./components/Nav";
import Ingredients from "./components/Ingredients";
import Areas from "./components/Areas";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/areas" element={<Areas />} />
      </Routes>
    </div>
  );
};

export default App;

// through each category => category.name => axois.get(`.....c=${category.name}`)
