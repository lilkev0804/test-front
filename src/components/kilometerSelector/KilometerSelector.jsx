import React, { useState } from "react";

export default function KilometerSelector({ min, max }) {
  const [minAxis, setMinAxis] = useState(0);

  const handleInput = (e) => {
    setMinAxis(e.target.value);
  };
  return (
    <div>
      <p>{minAxis}</p>
      <div className="lineSelector">
        <input type="range" onInput={handleInput} />
      </div>
    </div>
  );
}
