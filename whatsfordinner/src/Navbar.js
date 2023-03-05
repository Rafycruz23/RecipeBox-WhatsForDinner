import {Link} from "react-router-dom"; //this replaces the a tags with Link, to move around pages. 


export default function Navbar(){
    return <nav className="nav">
        <Link to="/">Logo</Link>
        <ul>
            <li><Link to="/plan">Plan My Meals</Link></li>
            <li><Link to="/all">All Recipes</Link></li>
            <form class="d-flex" role="search">
            <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </ul> 
    </nav>
}