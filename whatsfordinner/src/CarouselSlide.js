import React from 'react';
import useGetRecipes from "./useGetRecipes";




//Extracted the code below from Bootstrap Doc 

//renamed class to className because that is what React needs to identify classes

export default function CarouselSlide() {

  const [randomRecipe] = useGetRecipes("random");
  

  return <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={randomRecipe.image} className="d-block" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{randomRecipe.title}</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={randomRecipe.image} className="d-block" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{randomRecipe.title}</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={randomRecipe.image} className="d-block" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{randomRecipe.title}</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  
}
