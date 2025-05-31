import React, { useState } from 'react'
import "./MainPage.css"
import { use } from 'react'
import MealCard from './MealCard'

const MainPage = () => {
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const [msg, setMsg] = useState("")
  
  const onSearch = async () => {
    if (search == "") {
      setMsg("Please enter some recipe")
    } else {
      const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const jsonData = await result.json();
      setData(jsonData.meals)
      setMsg("")
  
      }
  }
  //console.log(data)
  
  return (
    
    <center className='center'>
      <h1 className='heading'>FOOD RECIPE APP </h1>
      <div className='main-container'>
        <input type="text" value={search} placeholder='Enter your Recipe' onChange={ (e)=>setSearch(e.target.value)} className='custom-input' /><br />
        <button onClick={onSearch} className='btn btn-warning mt-3' style={{color:'white'}} >Search</button>
      </div>
      <h3>{ msg}</h3>
      <div className="results">
        
          <MealCard  product={data} />
       
      </div>
      </center>
      
    
  )
}

export default MainPage
