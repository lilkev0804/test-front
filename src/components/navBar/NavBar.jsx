import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar({ handleSubmit }) {
  const [value, setValue] = useState('')
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
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button onClick={() => handleSubmit(value)} className="searchBarBtn">
            GO
          </button>
        </div>
      </div>
    </nav>
  )
}
