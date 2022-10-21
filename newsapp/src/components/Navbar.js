import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Navabar = ({ setSearch, search }) => {
    // const [search, setSearch] = useState("")
    return (
        <nav>
            <ul>
                <li><span style={{ fontWeight: "bold", fontSize: 30, color: "white" }}>Top News</span></li>
                <NavLink to='/home'><li>Home</li></NavLink>
                <NavLink to='/About'><li>About us</li></NavLink>
                <NavLink to='/contact'><li>Contact Us</li></NavLink>
                <NavLink to='/details'><li>Details Page</li></NavLink>
            </ul>
            <div>
                <input type='text' placeholder="search" defaultValue={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
        </nav>

    )
}

export default Navabar
