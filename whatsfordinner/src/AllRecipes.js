import "./styles.css" 
import useGetRecipes from "./useGetRecipes";
import React from "react";

export default function AllRecipes(){

    const recipes = useGetRecipes();
    return <div>
  
    <h1>AllRecipes is working</h1>
    <button onClick={recipes}>Click</button>

        
    </div> 
}