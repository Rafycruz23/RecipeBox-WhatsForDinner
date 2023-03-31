import React from 'react';
import "./styles.css" ;
import CarouselSlide from "./CarouselSlide";
import About from "./About";

export default function Home() {

  return (
    <div className='home-container'>
    <CarouselSlide/>
    <About/>
    </div>
  )
}
