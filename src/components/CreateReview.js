import React, { useState } from "react";

function CreateReview({ building }) {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const createReview = async (e) => {
    e.preventDefault();

    try {
      const body = { building, content };
      const response = await fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form className="d-flex mt-5" onSubmit={createReview}>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
        ></input>
        <button className="btn btn-success" onClick={createReview}>
          Create
        </button>
      </form>
    </>
  );
}

export default CreateReview;
