import React from "react";
import {
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  CardBody,
  CardImg,
} from "reactstrap";
import EditReview from "./EditReview";
import "./CSS/Review.css";

function Review({ review, changeSuccess }) {
  // const firstName = "";
  // const lastName = "";
  // const comment = "";
  // const profilePic = "";

  const deleteReview = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      });
      // get the reviews again, function passed down by props
      changeSuccess();

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h1">{review["title"]}</CardTitle>
          <div className="reviews-top">
            {/* <div className="user-details">
              <CardImg
                className="avatar"
                src={
                  profilePic || ""
                  //   "https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                alt="user avatar"
              />

              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {firstName} {lastName || "John Doe"}
              </CardSubtitle>
            </div> */}
            {[...Array(review["rating"])].map((star, i) => {
              return (
                <CardSubtitle
                  tag="h5"
                  key={i}
                  style={{ display: "inline-block" }}
                >
                  ⭐
                </CardSubtitle>
              );
            })}
            <div className="reviews-body">
              <CardText>{review["content"]}</CardText>
            </div>
            <CardText>
              <small className="text-muted text-bold">
                {review["created_on"]}
              </small>
            </CardText>
          </div>
          <EditReview review={review} changeSuccess={changeSuccess} />
          <button
            className="btn btn-danger"
            onClick={() => deleteReview(review["review_id"])}
          >
            Delete
          </button>
        </CardBody>
      </Card>
    </>
  );
}

export default Review;
