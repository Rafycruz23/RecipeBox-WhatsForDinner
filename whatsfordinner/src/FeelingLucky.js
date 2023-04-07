import "./styles.css" 
import useSearchRecipes from "./useSearchRecipes";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";

export default function FeelingLucky(){

    const [randomRecipe] = useSearchRecipes("random");
    // console.log(randomRecipe)

   const [display, setDisplay] = useState("false");


   const handleClick = () =>{
    setDisplay (!display);
   }

    //I don't know why the removeTags function didn't work the same way it was working in planmeals. For some reason it was throwing an error because of the replace method. So this function is altered to first check if the text parameter is defined before executing the replace. I don't know why, but this works. 
     function removeTags(text) {
       return text ? text.replace(/<\/?[^>]+(>|$)/g, "") : "";;
     }
     
    
    return (
      <div>
        <Card className="card-container">
          <Card.Img
            className="card-image"
            variant="top"
            src={randomRecipe.image}
          />
          <Card.Body>
            <Card.Title>{randomRecipe.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Health Score: {randomRecipe.healthScore}
            </Card.Subtitle>
            <Card.Text className="card-text">
              {removeTags(randomRecipe.summary)}
            </Card.Text>
            <div> 
              <br></br>
             {!display && (
              <Card.Text><ul>Ingredients: {randomRecipe.extendedIngredients.map((ingredients)=><li>{ingredients.name}</li>)}</ul></Card.Text>
             )}
              <br></br>
            </div>
            <div> 
             {!display && (
              <Card.Text>{removeTags(randomRecipe.instructions)}</Card.Text>
             )}
            <br></br>
            </div>
            <Button variant="primary" onClick={handleClick}>Show Recipe</Button>
          </Card.Body>
        </Card>
      </div>
    );
}