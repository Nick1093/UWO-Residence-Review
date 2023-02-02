import React, { useState } from "react";
import "./CSS/StarRating.css";

const StarRating = ({ selected, onClick }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <>
      <div
        style={{ color: selected ? "yellow" : "black", cursor: "pointer" }}
        onClick={onClick}
      >
        &#9734;
      </div>
    </>
  );
};

export default StarRating;
