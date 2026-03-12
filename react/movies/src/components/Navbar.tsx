import { BiSearchAlt2, BiCameraMovie } from "react-icons/bi"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav id="navbar">
            <h2><Link to="/"><BiCameraMovie /> Movies lib link</Link></h2>
            <form>
                <input type="text" placeholder="Search a Movie" />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
            <Link to="/movie/1">movie</Link><br />
            <Link to="/search">Search</Link>
        </nav>
    )
}