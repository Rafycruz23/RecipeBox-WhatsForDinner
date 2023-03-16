
import React from 'react';
import useGetRecipes from "./useGetRecipes";
 

export default function PlanMeals(){

  //by passing in the parameter of 7, it is used in the API as the count to generate 7 recipes
    const [randomRecipe] = useGetRecipes("random", 7);
    
   
    return(

      //this works, but looks terrible!
        <div>
        {randomRecipe.map(recipe => (
   
            <div className="card" style={{width: '18rem'}}>     
            <img src={recipe.image} className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">{recipe.summary}</p>
              <a href={recipe.sourceUrl} className="btn btn-primary" target="_blank">Get Recipe</a>
            </div>
            </div>
            ))};
  </div>

    
  );
}

    

        
    
    

