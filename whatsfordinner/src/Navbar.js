import logo from "./assets/RecipeBox.png";
import { Link, useNavigate } from "react-router-dom"; //this replaces the a tags with Link, to move around pages.
import { useState } from "react";
import axios from "axios";


export default function Navbar() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([])
  const navigate = useNavigate();

  async function handleSearch(event){
    event.preventDefault();
    try{
      // const apiKey = "5a312119fa95425c8af9a9236717e2b5";
      const apiKey = "8959366c723444e08598151392a0775e";
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${apiKey}`);
      setResults(response.data.results);
        
        navigate("/search")
      } catch (error){
        console.log(error);
        console.log(searchTerm)
      }
      return results
    }
    console.log(results)

  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="WhatsForDinner" />
      </Link>
      <ul>
        <li>
          <Link to="/plan">Inspire me!</Link>
        </li>
        {/* <li>
          <Link to="/feellucky">Feeling Lucky</Link>
        </li> */}
        <form className="d-flex" role="search">
          <input
            className="form-control me-3"
            value={searchTerm}
            type="text"
            placeholder="search by ingredient"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button
            className="btn btn-light"
            style={{ color: "#73a580", border: "solid #73a580" }}
            onClick={handleSearch}
          >
            Find Recipe
          </button>
        </form>
      </ul>
    </nav>
  );
}
