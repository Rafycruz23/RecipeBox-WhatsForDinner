import logo from "./assets/Logo.png";
import { Link } from "react-router-dom"; //this replaces the a tags with Link, to move around pages.


export default function Navbar() {
  
  
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
        <form className="d-flex" role="search">
          <input
            className="form-control me-3"
            value=''
            type="text"
            placeholder="Search"
            />
          <button className="btn btn-outline-success"> 
            Search
         </button>
        </form>
      </ul>
    </nav>
  );
}
