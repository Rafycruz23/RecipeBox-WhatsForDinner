
import useGetRecipes from "./useGetRecipes";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";

 

export default function PlanMeals(){

  //by passing in the parameter of 7, it is used in the API as the count to generate 7 recipes
    const [randomRecipe] = useGetRecipes("random", 4);
    
    //this function removes the HTML tags from the summary portion of the recipe. It is called in the text portion of the card
    function removeTags(text) {
      return text.replace(/<\/?[^>]+(>|$)/g, "");
    }
  
    const [display, setDisplay] = useState("false");


    const handleClick = () =>{
      setDisplay (!display);
     }
   
     //button doesn't work to re-generate the new recipes. 
    return (
      <div className="plan-meal">
        <div className="">
          <h3>Here are four recipes to give you some culinary inspiration.</h3>
          <span>Need more ideas?</span>

          <button
            className="btn btn-light"
            style={{ color: "#73a580", border: "solid #73a580" }}
            // onClick={useGetRecipes}
          >
            More Recipes
          </button>
        </div>
        {randomRecipe.map((recipe) => (
          <Card className="card-container">
            <Card.Img src={recipe.image} className="card-image" alt="" />
            <Card.Body>
              <Card.Title className="card-title">{recipe.title}</Card.Title>
              <Card.Text className="card-text">
                {removeTags(recipe.summary)}
              </Card.Text>
              <div>
                <br></br>
                {!display && (
                  <Card.Text>
                    <ul>
                      Ingredients:{" "}
                      {recipe.extendedIngredients.map((ingredients) => (
                        <li>{ingredients.name}</li>
                      ))}
                    </ul>
                  </Card.Text>
                )}
                <br></br>
              </div>
              <div>
                {!display && (
                  <Card.Text>{removeTags(recipe.instructions)}</Card.Text>
                )}
              </div>
              <Button variant="primary" onClick={handleClick}>
                Get Recipe
              </Button>
            </Card.Body>
          </Card>
        ))}
        ;
      </div>
    );
}

    

        
    
    

