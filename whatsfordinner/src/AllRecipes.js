import "./styles.css" 
import useGetRecipes from "./useGetRecipes";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function AllRecipes(){

//when we call the useGetRecipes, we pass in whichever endpoint we want to call as the parameter, in this case the random endpoint.  

    const [randomRecipe] = useGetRecipes("random");
    console.log(randomRecipe)
    
    return (
      <div>
        <h1>AllRecipes is working</h1>
        {/* <button onClick={useGetRecipes('random')}>Click</button> */}
        <p>{randomRecipe.title}</p>
        <p>{randomRecipe.summary}</p>
      </div>
    );
}