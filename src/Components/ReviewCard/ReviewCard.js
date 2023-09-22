import React from "react";
import "./ReviewCard.css";
import StarIcon from "@mui/icons-material/Star";

function ReviewCard({ review_title, rating, review, timestamp }) {
  return (
    <div className="reviews_container">
      <div className="review_card_container">
        <div className="review_title">{review_title}</div>
        <div className="review_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} />
            ))}
        </div>
        <p className="review_text">{review}</p>
        <p className="review_timestamp">{timestamp}</p>
      </div>
    </div>
  );
}

export default ReviewCard;

// <div className="reviews_row">
// {reviews.map((review, index) => (
//     <Review key={index} {...review} />
// ))}
// </div>
