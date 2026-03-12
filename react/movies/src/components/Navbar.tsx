import { BiSearchAlt2, BiCameraMovie } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export const Navbar = () => {
    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (searchValue.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchValue)}`)
            setSearchValue("")
        }
    }

    return (
        <nav id="navbar">
            <h2><Link to="/"><BiCameraMovie /> Movies</Link></h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Buscar filme..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}