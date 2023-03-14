// import "./styles.css" 
// import React from 'react';
// import useGetRecipes from "./useGetRecipes";

// export default function PlanMeals(){
//     const [randomRecipe] = useGetRecipes("random");
//     console.log(randomRecipe)
    
//     return (
//       <div>
//         <h1>PlanMeals is working</h1>
//         {/* <button onClick={useGetRecipes('random')}>Click</button> */}
//         <p>{randomRecipe.title}</p>
//         <p>{randomRecipe.summary}</p>
//       </div>
//     );
//     };
import React, {useEffect, useState} from 'react';
import useGetRecipes
 from "./useGetRecipes";
 import axios from "axios";

export default function PlanMeals(){

    const [randomRecipe] = useGetRecipes("random");
    const [recipeSummary, setRecipeSummary] = useState("");

//     useEffect(() => {
//    const fetchData = async () => {
//      const response = await axios.get(
//        `https://api.spoonacular.com/recipes/${randomRecipe.id}/summary/?apiKey=8959366c723444e08598151392a0775e`
//      );
//      setRecipeSummary(response.data.recipes[0]);
//    };
//    fetchData();
//    console.log(recipeSummary.summary);
//  }, []);
//  return [recipeSummary]

    return(



    <div>
        {/* <h1>PlanMeals is working</h1> */}
        <div className="card" style={{width: '18rem'}}>
  <img src={randomRecipe.image} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{randomRecipe.title}</h5>
    <p className="card-text">{randomRecipe.summary}</p>
    <a href={randomRecipe.sourceUrl} className="btn btn-primary" target="_blank">Get Recipe</a>
  </div>
</div>

        
    </div> 
    )
}
