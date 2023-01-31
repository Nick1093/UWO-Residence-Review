import React from "react";
import { useParams } from "react-router-dom";
import ListReviews from "./ListReviews";
import CreateReview from "./CreateReview";

function ReviewsPage() {
  const { buildingName } = useParams();

  return (
    <>
      <div>{buildingName} Reviews</div>
      <CreateReview building={buildingName} />
      <ListReviews building={buildingName} />
    </>
  );
}

export default ReviewsPage;
