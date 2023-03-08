// import React, { useEffect, useState } from "react";
// import axios from "axios";

function useGetRecipes() {
 const [newRecipe, setRecipe] = useState({});

 useEffect(() => {
   const fetchData = async () => {
     const response = await axios.get(
       "https://api.spoonacular.com/recipes/random?apiKey=5a312119fa95425c8af9a9236717e2b5"
     );
     setRecipe(response.data.recipes[0]);
   };
   fetchData();
   console.log(newRecipe.summary);
 }, []);
 return [newRecipe]
}

export default useGetRecipes;
