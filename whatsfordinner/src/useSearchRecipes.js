import { useEffect, useState } from "react";
import axios from "axios";

function useSearchRecipes(endpoint) {
  const [searchedRecipe, setRecipe] = useState([]);
  // const apiKey = "5a312119fa95425c8af9a9236717e2b5";
  const apiKey = "8959366c723444e08598151392a0775e";
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${endpoint}?apiKey=${apiKey}`
      );
      setRecipe(response.data.recipes[0]);
    };
    fetchData();
  }, []);
  return [searchedRecipe];
}

export default useSearchRecipes;
