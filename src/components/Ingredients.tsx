import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIngredients, updateIngredientsLoaded } from '../redux/actions';
import { State } from "./Models";

const Ingredients: React.FC = () => {
  const dispatch = useDispatch<any>();
  const appState = useSelector((state: State)  => state.appState);

  useEffect(() => {
    if (appState.ingredientsLoaded) return;
    dispatch(fetchIngredients());
    dispatch(updateIngredientsLoaded());
  })
  return (
    <div>Ingredients</div>
  )
}

export default Ingredients;