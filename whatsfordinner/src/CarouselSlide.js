import React from 'react';
import useSearchRecipes from './useSearchRecipes';
import Carousel from 'react-bootstrap/Carousel'

function CarouselSlide() {
  const [randomRecipe] = useSearchRecipes("random");
  const [randomRecipe1] = useSearchRecipes("random");
  const [randomRecipe2] = useSearchRecipes("random");
  
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