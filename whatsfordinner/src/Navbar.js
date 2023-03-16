import logo from "./assets/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom"; //this replaces the a tags with Link, to move around pages.
// import React, { useEffect } from "react";
// import useGetRecipes from "./useGetRecipes";

export default function Navbar() {
  
  const [inputText, setText] = useState();

  function handleChange(e) { 
    e.preventDefault();
    setText(e.target.value); 
    console.log(inputText)
  } 


  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="WhatsForDinner" />
      </Link>
      <ul>
        <li>
          <Link to="/plan">Plan My Meals</Link>
        </li>
        <li>
          <Link to="/all">All Recipes</Link>
        </li>
        <form className="d-flex" role="search">
          <input
            className="form-control me-3"
            value={inputText}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success"  type="submit" onClick={handleChange}> 
            Search
         </button>
        </form>
      </ul>
    </nav>
  );
}
