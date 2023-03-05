import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AllRecipes from './AllRecipes';
import PlanMeals from './PlanMeals';
// import Navbar from './Navbar';
import "./styles.css" 
import {BrowserRouter, Routes, Route} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<App />}/>
       <Route path='all' element={<AllRecipes/>}/>
       <Route path='plan' element={<PlanMeals/>}/>        
      </Routes>  
    </BrowserRouter>
  </React.StrictMode>
);


