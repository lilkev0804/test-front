import React from "react";

export default function SearchBar({ onChange, value, handleSubmit, type }) {
  return (
    <div className="searchBar">
      <input
        className="input searchCarInput"
        type="text"
        placeholder="Find brand or model"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyUp={(e) => e.keyCode === 13 && handleSubmit(value)}
      />
      <button onClick={() => handleSubmit(value)} className="searchBarBtn">
        GO
      </button>
    </div>
  );
}
