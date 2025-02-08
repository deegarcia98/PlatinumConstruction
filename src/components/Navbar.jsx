import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <header className="header-area">
        <Link to="/">
        <img src='/images/pclogo.png' alt="Platinum Construction logo"/>
        </Link>

        <ul>
            <li className="list" ><Link to="/projects">Featured Projects</Link></li>
            <li className="list"><Link to="/about">About Us</Link></li>
            <li className="list"><Link to="/contact">Contact Us</Link></li>
        </ul>
    </header>
    )
}

export default Navbar


