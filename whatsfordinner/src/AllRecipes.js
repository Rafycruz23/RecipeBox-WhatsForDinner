import "./styles.css" 
// import useGetRecipes from "./useGetRecipes";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function AllRecipes(){

    // const [recipe] = useGetRecipes("");
      const [newRecipe, setRecipe] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/random?apiKey=5a312119fa95425c8af9a9236717e2b5"
        );
        setRecipe(response.data.recipes[0]);
        console.log(newRecipe.summary);
        
      };
      fetchData();
    }, []);
    
    return (
      <div>
        <h1>AllRecipes is working</h1>
        {/* <button onClick={recipe}>Click</button> */}
        <p>{newRecipe.title}</p>
      </div>
    );
}