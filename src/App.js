import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ReviewsPage from "./components/ReviewsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reviews-page">
          <Route path=":buildingName" element={<ReviewsPage />}></Route>
        </Route>

        {/* use useParams() to access the name of the building being passed to the building layout component */}
      </Routes>
    </>
  );
}

export default App;
