import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './MealInfo.css';

const MealInfo = () => {
  const { mealId } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const jsonData = await response.json();
      setInfo(jsonData.meals[0]);
    };

    if (mealId) getInfo();
  }, [mealId]); // runs when mealId changes

  return (
    <div>
      {!info ? (
        "Data not found"
      ) : (
          <div className="info-container">
        <div  className='info-card'>
          <img src={info.strMealThumb} alt={info.strMeal} className='meal-image'/>
          <div>
            <h1>Recipe Details</h1>
            <button className='btn btn-success'>{info.strMeal}</button>
            <h4>Instructions</h4>
            <p>{info.strInstructions}</p>
          </div>
            </div>
            <NavLink to="/">
        <button className='btn btn-secondary' >Back to Home</button>
  </NavLink>
          </div>
          
      )}
      
    </div>
  );
  
};

export default MealInfo;
