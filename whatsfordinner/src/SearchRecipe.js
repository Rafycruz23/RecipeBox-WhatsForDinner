import React from 'react';
import Card from 'react-bootstrap/Card'

export default function SearchRecipe (props) {
  
  const recipes = props.results;
  console.log(recipes)

  return (
    <div>
      SearchRecipe is working
     <p>{recipes.title}</p>
     
  {recipes.map((recipe)=> 
  
        <Card className="card-container">
          <Card.Img className="card-image" variant="top" src={recipe.image}/>
         <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Text>
          {recipe.summary} 
            </Card.Text>
        </Card.Body>
        </Card>
 
          )}
    </div>
  )
}
