import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

// through each category => category.name => axois.get(`.....c=${category.name}`)
