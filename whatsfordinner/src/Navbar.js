import logo from "./assets/Logo.png";
import { Link } from "react-router-dom"; //this replaces the a tags with Link, to move around pages.
import { useState } from "react";
import axios from "axios";


export default function Navbar() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([])

  async function handleSearch(event){
    event.preventDefault();
    try{
      // const apiKey = "5a312119fa95425c8af9a9236717e2b5";
      const apiKey = "8959366c723444e08598151392a0775e";
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${apiKey}`);
      setResults(response.data.results);
      console.log(results)
      
      for(let i = 0; i<results.length; i++){
        console.log(results)
      }
      
    } catch (error){
      console.log(error);
      console.log(searchTerm)
    }
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
          <Link to="/all">Feeling Lucky</Link>
        </li>
        <form className="d-flex" role="search" onSubmit={handleSearch}>
          <input
            className="form-control me-3"
            value={searchTerm}
            type="text"
            placeholder="Search"
            onChange={(event)=> setSearchTerm(event.target.value)}
            />
          <button className="btn btn-outline-success"> 
            Search
         </button>
        </form>
      </ul>
    </nav>
  );
}
