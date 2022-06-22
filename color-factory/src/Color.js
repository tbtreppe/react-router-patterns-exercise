import React from "react";
import { Link } from "react-router-dom";

function Color({ hex, color, history }) {
  if (!hex) {
    history.push("/colors");
  }

  return (
    <div className="Color" style={{ backgroundColor: hex }}>
      <h2>This is {color}. Isn't it beautiful?</h2>

      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Color;
