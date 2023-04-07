import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function SearchRecipe (props) {
  
  const recipes = props.results;
  // console.log(recipes)
  

// function getRecipe(){
//   const apiKey = "5a312119fa95425c8af9a9236717e2b5";
//   // const apiKey = "8959366c723444e08598151392a0775e";
  
//   https://api.spoonacular.com/recipes/{id}/information

// }

  return (
    <div>     
  {recipes.map((recipe)=> 
  
        <Card className="card-container">
          <Card.Img className="card-image" variant="top" src={recipe.image}/>
         <Card.Body>
        </Card.Body>
        <Button variant="primary">{recipe.title}</Button>
        </Card>
          )}
    </div>
  )
}
