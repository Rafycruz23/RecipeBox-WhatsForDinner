import "./styles.css" 
import useGetRecipes from "./useGetRecipes";
import Card from 'react-bootstrap/Card'

// import React, {useEffect, useState} from "react";

export default function AllRecipes(){

    const [randomRecipe] = useGetRecipes("random", 1);
    console.log(randomRecipe)
    
    return (
      <div>
        <Card className="card-container">
          <Card.Img className="card-image" variant="top" src={randomRecipe.image}/>
      <Card.Body>
        <Card.Title>{randomRecipe.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Health Score: {randomRecipe.healthScore}</Card.Subtitle>
        <Card.Text>
          {randomRecipe.summary} 
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    );
}