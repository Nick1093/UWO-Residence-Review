import React, { useState } from "react";

function EditReview({ review, changeSuccess }) {
  const [content, setContent] = useState(review["content"]);
  const [newRating, setnewRating] = useState(0);
  const [hover, setHover] = useState(0);

  const updateReview = async (e) => {
    e.preventDefault();
    console.log(newRating);
    try {
      const body = { content, newRating };
      const response = await fetch(
        `http://localhost:5000/reviews/${review["review_id"]}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      changeSuccess();
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${review["review_id"]}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${review["review_id"]}`}
        onClick={() => setContent(review["content"])}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Review</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setContent(review["content"])}
              >
                &times;
              </button>
            </div>

            {/* star */}
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={
                      index <= (hover || review["rating"]) ? "on" : "off"
                    }
                    onClick={() => setnewRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(newRating)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                );
              })}
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setContent(e.target.value)}
                value={content}
              ></input>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateReview(e)}
              >
                Done
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setContent(review["content"])}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditReview;
