import React from 'react'
import { useParams } from 'react-router-dom'

const MealList = () => {
  const params = useParams<string>();


  return (
    <div>This is the meal list component, Parameter: {params.mealName}</div>
  )
}

export default MealList