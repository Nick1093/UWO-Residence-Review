import { SelectUnstyledContext } from "@mui/base";
import React, { useState, useEffect } from "react";
import Review from "./Review";

function ListReviews({ reviews, changeSuccess }) {
  return (
    <>
      {reviews.map((review) => (
        <Review
          key={review["review_id"]}
          review={review}
          changeSuccess={changeSuccess}
        />
      ))}
    </>
  );
}

export default ListReviews;

// const onEditSuccess = () => {
//   console.log("edit is being called");
//   getReviews();
// };

// const onDeleteSuccess = () => {
//   console.log("delete is being called");
//   getReviews();
// };

// useEffect(() => {
//   getReviews();
// }, [reviews]);
