import React, { useState } from "react";
import "./CSS/StarRating.css";

function CreateReview({ building, changeSuccess }) {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const createReview = async (e) => {
    e.preventDefault();
    const date = new Date(Date.now());

    try {
      const body = { building, rating, content, date };
      const response = await fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setContent("");
      setRating(0);

      changeSuccess();
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>

      <form className="d-flex mt-5" onSubmit={createReview}>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          placeholder={"Write your thoughts about " + building}
        ></input>
        <button className="btn btn-success" onClick={createReview}>
          Create
        </button>
      </form>
    </>
  );
}

export default CreateReview;
