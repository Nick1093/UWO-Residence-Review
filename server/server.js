const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const port = 5000;

// middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// create a review
app.post("/reviews", async (req, res) => {
  try {
    console.log(req.body);
    const { building, rating, content, date } = req.body;
    const newReview = await pool.query(
      "INSERT INTO reviews (building, rating, content, created_on) VALUES($1, $2, $3, $4) RETURNING *",
      [building, rating, content, date]
    );

    res.json(newReview.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// get all reviews
app.get("/reviews", async (req, res) => {
  try {
    const building = req.query.building;
    const allReviews = await pool.query(
      `SELECT * FROM reviews WHERE building = '${building}' ORDER BY review_id DESC`
    );
    res.json(allReviews.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// get a review
app.get("/reviews/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const review = await pool.query(
      "SELECT * FROM reviews WHERE review_id = $1",
      [id]
    );

    res.json(review.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// update a review
app.put("/reviews/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { content, newRating } = req.body;
    const review = await pool.query(
      "UPDATE reviews SET content = $1, rating = $2 WHERE review_id = $3",
      [content, newRating, id]
    );

    res.json("Review was Updated!");
  } catch (error) {
    console.log(error.message);
  }
});

// delete a review
app.delete("/reviews/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteReview = await pool.query(
      "DELETE FROM reviews WHERE review_id = $1",
      [id]
    );

    res.json("Review was deleted!");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
