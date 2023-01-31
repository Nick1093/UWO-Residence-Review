import React, { useState, useEffect } from "react";
import Review from "./Review";

function ListReviews({ building }) {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/reviews?building=${building}`
      );

      if (response.ok) {
        const jsonData = await response.json();
        setReviews(jsonData);
      } else {
        console.log(`Server returned status code ${response.status}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getReviews();
  }, [reviews]);

  return (
    <>
      {reviews.map((review) => (
        <>
          <Review
            key={review["review_id"]}
            title={review["title"]}
            content={review["content"]}
            created_on={review["created_on"]}
            rating={review["rating"]}
          />
        </>
      ))}
    </>
  );
}

export default ListReviews;
