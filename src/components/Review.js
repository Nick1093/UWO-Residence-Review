import React from "react";
import {
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  CardBody,
  CardImg,
} from "reactstrap";
import "./CSS/Review.css";

function Review({ title, content, rating, created_on }) {
  const firstName = "";
  const lastName = "";
  const stars = "";
  const comment = "";
  const timestamp = "";
  const profilePic = "";

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h1">{title}</CardTitle>
          <div className="reviews-top">
            <div className="user-details">
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
              {[...Array(stars || 5)].map((star, i) => {
                return (
                  <CardSubtitle tag="h5" key={i}>
                    ⭐
                  </CardSubtitle>
                );
              })}
            </div>
            <div className="reviews-body">
              <CardText>{content}</CardText>
            </div>
            <CardText>
              <small className="text-muted text-bold">{timestamp}</small>
            </CardText>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Review;
