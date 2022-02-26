import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbarContainer">
      <div className="navlinkContainer">
        <div className="elementNavLink">
          <Link className="navlink" to="/">
            Home
          </Link>
          <Link className="navlink" to="/contact">
            Contact
          </Link>
        </div>
        <div className="searchBar">
          <input
            className="input searchCarInput"
            type="text"
            placeholder="Rechercher"
          ></input>
          <button className="searchBarBtn">GO</button>
        </div>
      </div>
    </nav>
  )
}
