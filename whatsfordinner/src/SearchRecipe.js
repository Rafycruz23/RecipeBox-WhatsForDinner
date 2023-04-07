import React from 'react';
// import Card from 'react-bootstrap/Card'

export default function SearchRecipe (props) {
  
  const recipe = props.results[0].title
  console.log(recipe)

  return (
    <div>
      SearchRecipe is working
     <p>{recipe}</p>
     

        {/* <Card className="card-container">
          <Card.Img className="card-image" variant="top" src={randomRecipe.image}/>
         <Card.Body>
            <Card.Title>{results.title}</Card.Title>
         <Card.Subtitle className="mb-2 text-muted">Health Score: {randomRecipe.healthScore}</Card.Subtitle>
            <Card.Text>
          {randomRecipe.summary} 
            </Card.Text>
        </Card.Body>
        </Card> */}
    </div>
  )
}
