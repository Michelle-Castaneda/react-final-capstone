import React, { useState, useEffect } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Review.css";
import axios from "axios";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import reviews_animation from "./reviews_animation.gif"

function Review() {
  const [reviews, setReviews] = useState([]);

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
      <img src={reviews_animation} />
      <div className="reviewsTitleBtns">
        {/* <h3 className="reviewsTitle">Recent Reviews</h3> */}

        {/* <div className="reviewsBtns">
          <NavigateBeforeIcon />
          <NavigateNextIcon />
        </div> */}
      </div>

      <div className="reviewsContainer">
        {reviews.map((reviewData, index) => (
          <ReviewCard key={index} reviewData={reviewData} />
        ))}
      </div>
    </div>
  );
}

export default Review;
