import "./styles.css" 
// import useGetRecipes from "./useGetRecipes";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function AllRecipes(){

    // const [recipe] = useGetRecipes("");
      const [recipe, setRecipe] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/random?apiKey=5a312119fa95425c8af9a9236717e2b5"
        );
        setRecipe(response.data);
        console.log(response);
        
      };
      fetchData();
    }, []);
    
    return (
    <div>
  
    <h1>AllRecipes is working</h1>
    {/* <button onClick={recipe}>Click</button> */}
    {/* <p>{recipe}</p>
    <p>{recipe.summary}</p> */}

        
    </div> 
    )
}