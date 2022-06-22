import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div>
      <h1>Click on the dogs for more information</h1>
      <img src={dogs.src} alt={dogs.name}></img>
      <Link to={`/dogs/${dogs.name}`}>{dogs.name}</Link>
    </div>
  );
}

export default DogList;
