import React from "react";
import "./Card.css";
import batmanimage from "../Card/image.png";
const Card = (props) => {
  return (
    <div className="card-container">
      <img src={batmanimage} alt="random-image" />
      {/* The error is that the src attribute should be wrapped in curly braces
      when passing a variable. The variable batmanimage is an object and needs
      to be wrapped in curly braces so that React can interpret it correctly.
      Without the curly braces, React will think that the string "batmanimage"
      is the source of the image, rather than the variable. */}
      <p>{props.name}</p>
      <p>Job:{props.job}</p>
      <p>Age:{props.age}</p>
    </div>
  );
};

export default Card;
