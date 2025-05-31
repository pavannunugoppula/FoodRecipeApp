import React from 'react';
import MainPage from './MainPage';
import { Routes, Route } from 'react-router-dom';
import MealInfo from './MealInfo';
import NavbarComponent from './NavBarComponent';
import AboutComponent from './AboutComponent';
import WhyChooseUs from './WCU';

const App = () => {
  return (
    <div>
      <NavbarComponent/>
      <Routes>
        
        <Route path="/" element={<MainPage />} />
        <Route path="/:mealId" element={<MealInfo />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/details" element={<WhyChooseUs />} />
      </Routes>
    </div>
  );
};

export default App;
