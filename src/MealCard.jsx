import React from 'react'
import "./MealCard.css"
import { NavLink } from 'react-router-dom'

const MealCard = ({product}) => {
  return (
    <div className='container'>
          {!product ? "Sorry your search not found" : product.map((each) => {
              return (
                  <div className='card-container'>
                      <div>
                          <img src={each.strMealThumb} alt="image" className='image'/>
                    <p>{each.strMeal}</p>
                    <NavLink to={`/${each.idMeal}`}>
                          <button className='btn btn-warning'>Recipe Details</button>
                    </NavLink>
                      
                      </div>
                      
              </div>
          )
      })}
    </div>
  )
}

export default MealCard
