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
import React from 'react';
import useGetRecipes from "./useGetRecipes";
 

export default function PlanMeals(){

    const [randomRecipe] = useGetRecipes("random");
   
    return(

//this is taking the randomRecipe object and converting it to an array so that it can be mapped over. However, it is only generating one recipe and displaying it 7 times
        <div>
        {Object.values(randomRecipe).slice(0, 7).map(recipe => (
   
            <div className="card" style={{width: '18rem'}}>     
            <img src={randomRecipe.image} className="card-img-top" alt=""/>
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

    

        
    
    

