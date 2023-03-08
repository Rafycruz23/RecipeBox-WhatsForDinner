import "./styles.css" 
import useGetRecipes from "./useGetRecipes";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function AllRecipes(){

    const [randomRecipe] = useGetRecipes("");
    
    return (
      <div>
        <h1>AllRecipes is working</h1>
        {/* <button onClick={recipe}>Click</button> */}
        <p>{randomRecipe.title}</p>
      </div>
    );
}