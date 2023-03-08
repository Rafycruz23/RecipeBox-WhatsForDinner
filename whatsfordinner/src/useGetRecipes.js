import React, { useEffect, useState } from "react";
import axios from "axios";

//by passing in the parameter 'endpoint' we can specify from within each component the specific api endpoint we want to call. The parameter is then interpolated into the link

function useGetRecipes(endpoint) {
 const [newRecipe, setRecipe] = useState({});

 useEffect(() => {
   const fetchData = async () => {
     const response = await axios.get(
       `https://api.spoonacular.com/recipes/${endpoint}?apiKey=5a312119fa95425c8af9a9236717e2b5`
     );
     setRecipe(response.data.recipes[0]);
   };
   fetchData();
   console.log(newRecipe.summary);
 }, []);
 return [newRecipe]
}

export default useGetRecipes;
