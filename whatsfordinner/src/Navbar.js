import logo from "./assets/Logo.png";
import { Link } from "react-router-dom"; //this replaces the a tags with Link, to move around pages.
import axios from "axios";
import React, { useEffect } from "react";
import useGetRecipes from "./useGetRecipes";

export default function Navbar() {
  //AXIOS used to GET data from API. NEEDS WORK!!!!! Link works but function itself not.

  // const getRecipes= useEffect(()=> {
  // const fetchData = async() => {
  //   // const apiKey = "5a312119fa95425c8af9a9236717e2b5";
  //   const response = await axios.get(
  //     "https://api.spoonacular.com/recipes/random?apiKey=5a312119fa95425c8af9a9236717e2b5"
  //   );
  //   console.log(response.data);
  // }
  // fetchData();

  // }, []);

  // return (
  //   <div>
  //     <h1>hello</h1>
  //   </div>
  // );

  // const getRecipes = () => {
  //    const apiKey = "5a312119fa95425c8af9a9236717e2b5";
  // axios.get('https://api.spoonacular.com/recipes/random?'+ apiKey).then(function
  //         (response){
  //         console.log(response);
  //     })
  // }
  const recipes = useGetRecipes();

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
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" onClick={recipes}>
            Search
          </button>
        </form>
      </ul>
    </nav>
  );
}
