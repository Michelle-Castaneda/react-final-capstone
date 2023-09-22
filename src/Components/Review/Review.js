import React, { useState, useEffect } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Review.css";
import axios from "axios";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Review() {
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/user_reviews")
      .then((response) => {
        console.log("Reviews Data", response.data);
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews data: ", error);
      });
  }, []);

  return (
    <div className="reviews">
      <div className="reviewsTitleBtns">
        <h3 className="reviewsTitle">Recent Reviews</h3>
        <div className="reviewsBtns"></div>
        <NavigateBeforeIcon />
        <NavigateNextIcon />
      </div>

      <ReviewCard reviews={reviews} />
    </div>
  );
}

export default Review;
