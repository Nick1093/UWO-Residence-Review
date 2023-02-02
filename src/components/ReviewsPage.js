import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListReviews from "./ListReviews";
import CreateReview from "./CreateReview";

function ReviewsPage() {
  const { buildingName } = useParams();
  const [reviews, setReviews] = useState([]);
  const [building, setBuilding] = useState("");

  const getReviews = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/reviews?building=${buildingName}`
      );

      console.log(response);

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

  if (buildingName !== building) {
    getReviews();
    setBuilding(buildingName);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{buildingName} Reviews</h1>
      <CreateReview
        building={buildingName}
        reviews={reviews}
        changeSuccess={getReviews}
      />
      <ListReviews
        building={buildingName}
        reviews={reviews}
        changeSuccess={getReviews}
      />
    </>
  );
}

export default ReviewsPage;
