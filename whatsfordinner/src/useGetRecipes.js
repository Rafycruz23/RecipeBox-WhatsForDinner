import React, { useEffect, useState } from "react";
import axios from "axios";

//by passing in the parameter 'endpoint' we can specify from within each component the specific api endpoint we want to call. The parameter is then interpolated into the link. The count parameter specifies how many recipes to return
//alternate API key: 8959366c723444e08598151392a0775e
//apiKey=5a312119fa95425c8af9a9236717e2b5

 function useGetRecipes(endpoint, count) {
 const [newRecipe, setRecipe] = useState([]);
//  const apiKey = "5a312119fa95425c8af9a9236717e2b5";
const apiKey = "8959366c723444e08598151392a0775e";
 useEffect(() => {
   const fetchData = async () => {
     const response = await axios.get(
       `https://api.spoonacular.com/recipes/${endpoint}?apiKey=${apiKey}&number=${count}`
      
     );
     setRecipe(response.data.recipes);
     //removed the [0] index to try to generate more recipes for the plan meals cards
   };
   fetchData();
   console.log(newRecipe.summary);
   console.log(typeof(newRecipe))
 }, []);
 return [newRecipe]
};

export default useGetRecipes;