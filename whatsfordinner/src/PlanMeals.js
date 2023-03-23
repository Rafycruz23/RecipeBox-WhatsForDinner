
import React from 'react';
import useGetRecipes from "./useGetRecipes";
import Card from 'react-bootstrap/Card';
 

export default function PlanMeals(){

  //by passing in the parameter of 7, it is used in the API as the count to generate 7 recipes
    const [randomRecipe] = useGetRecipes("random", 7);
    
    //this function removes the HTML tags from the summary portion of the recipe. It is called in the text portion of the card
    function removeTags(text) {
      return text.replace(/<\/?[^>]+(>|$)/g, "");
    }
  
   
    return (
      //this works, but looks terrible!
      <div className="plan-meal">
        
        {randomRecipe.map((recipe) => (
          <Card className="card-container">
            <Card.Img src={recipe.image} className="card-image" alt="" />
            <Card.Body>
              <Card.Title className="card-title">{recipe.title}</Card.Title>
              <Card.Text className="card-text">
              {removeTags(recipe.summary)}
              </Card.Text>
              <Card.Link
                href={recipe.sourceUrl}
                className="btn btn-primary"
                target="_blank"
              >
                Get Recipe
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
        ;
      </div>
    );
}

    

        
    
    

