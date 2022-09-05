import React from 'react'
import { useParams } from 'react-router-dom';

const Meal: React.FC = () => {
  const params = useParams();


  return (
    <main>
      <h1>{params.meal}</h1>
      <div>Info for {params.meal} goes here.</div>
    </main>
  )
}

export default Meal;