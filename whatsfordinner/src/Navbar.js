import {Link} from "react-router-dom"; //this replaces the a tags with Link, to move around pages. 


export default function Navbar(){
    return <nav className="nav">
        <Link to="/">Logo</Link>
        <ul>
            <li><Link to="/plan">Plan My Meals</Link></li>
            <li><Link to="/all">All Recipes</Link></li>
        </ul> 
    </nav>
}