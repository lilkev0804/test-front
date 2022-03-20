import React from "react";

export default function Button({ onClick, value, id, className }) {
  return (
    <button id={id} className={className} onClick={() => onClick()}>
      <span>{value}</span>
    </button>
  );
}
