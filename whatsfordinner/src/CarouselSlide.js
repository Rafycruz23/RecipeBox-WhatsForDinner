import React from 'react';
import useGetRecipes from "./useGetRecipes";
import Carousel from 'react-bootstrap/Carousel'




//Extracted the code below from Bootstrap Doc 

//renamed class to className because that is what React needs to identify classes

function CarouselSlide() {
  const [randomRecipe] = useGetRecipes("random")
  const [randomRecipe1] = useGetRecipes("random")
  const [randomRecipe2] = useGetRecipes("random")
  return ( 
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block carousel"
          src={randomRecipe.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{randomRecipe.title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel"
          src={randomRecipe1.image}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{randomRecipe1.title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel"
          src={randomRecipe2.image}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{randomRecipe2.title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlide;