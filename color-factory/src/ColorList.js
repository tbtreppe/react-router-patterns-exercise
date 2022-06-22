import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
  const colorLinks = Object.keys(colors).map((colorName) => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));
  return (
    <div>
      <h1>Welcome to the color factory</h1>
      <Link to="/colors/new">Add a color</Link>
      <p>Please select a color</p>
      <ul>{colorLinks}</ul>
    </div>
  );
}

export default ColorList;
