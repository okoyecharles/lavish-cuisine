import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import fetchCategories from './redux/actions';

function App() {
  const dispatch = useDispatch<any>();
  const [categoriesLoaded, setCategoriesLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (categoriesLoaded) return;
    dispatch(fetchCategories());
    setCategoriesLoaded(true);
  }, [])
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
