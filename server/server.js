const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { parseComplete } = require("pg-protocol/dist/messages");
const port = 5000;

// middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// create a review
app.post("/reviews", async (req, res) => {
  try {
    console.log(req.body);
    const { description } = req.body;
    const newReview = await pool.query(
      "INSERT INTO reviews (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newReview.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// get all reviews
app.get("/reviews", async (req, res) => {
  try {
    const allReviews = await pool.query("SELECT * FROM reviews");
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
    const { description } = req.body;
    const review = await pool.query(
      "UPDATE reviews SET description = $1 WHERE review_id = $2",
      [description, id]
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
