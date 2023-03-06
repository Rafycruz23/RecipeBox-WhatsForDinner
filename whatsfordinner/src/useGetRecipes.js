import React, { useEffect } from "react";
import axios from "axios";

function useGetRecipes() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=5a312119fa95425c8af9a9236717e2b5"
      );
      console.log(response.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default useGetRecipes;
