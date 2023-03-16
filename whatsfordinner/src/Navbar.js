import logo from "./assets/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom"; //this replaces the a tags with Link, to move around pages.


export default function Navbar() {
  
  const [searchTerm, setSearchTerm] = useState('pasta');
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = "5a312119fa95425c8af9a9236717e2b5";
  // const apiKey = "8959366c723444e08598151392a0775e";

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?=chocolate&apiKey=5a312119fa95425c8af9a9236717e2b5`);
      const data = await response.json();
      setSearchResults(data);
      console.log(searchResults)
    } catch (error) {
      console.error(error);
    }

  };
  
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
            value={searchTerm}
            type="text"
            placeholder="Search"
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
          <button className="btn btn-outline-success"  onClick={handleSearch}> 
            Search
         </button>
        </form>
      </ul>
    </nav>
  );
}
