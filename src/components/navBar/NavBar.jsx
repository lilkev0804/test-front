import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

export default function NavBar({ handleSubmit }) {
  const [value, setValue] = useState("");
  return (
    <nav className="navbarContainer">
      <div className="navlinkContainer">
        <div className="elementNavLink">
          <Link className="navlink" to="/">
            Home
          </Link>
        </div>
        <SearchBar
          value={value}
          onChange={(e) => setValue(e)}
          handleSubmit={(e) => handleSubmit(e)}
        />
      </div>
    </nav>
  );
}
