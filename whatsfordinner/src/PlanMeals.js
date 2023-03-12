import "./styles.css" 
import React from 'react';
import useGetRecipes from "./useGetRecipes";

export default function PlanMeals(){
    const [randomRecipe] = useGetRecipes("complexSearch");
    console.log(randomRecipe)
    
    return (
      <div>
        <h1>PlanMeals is working</h1>
        {/* <button onClick={useGetRecipes('random')}>Click</button> */}
        <p>{randomRecipe.title}</p>
        <p>{randomRecipe.summary}</p>
      </div>
    );
    };