import React from "react";
import "./ReviewCard.css";
import StarIcon from "@mui/icons-material/Star";

function ReviewCard({reviewData}) {
    console.log("Review Card Data", reviewData)

  return (

      <div className="review_card_container">
        <p className="review_title">{reviewData.review_title}</p>
        <p className="review_rating">
          {Array(reviewData.rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} />
            ))}
        </p>
        <p className="review_text">{reviewData.review}</p>
        <p className="review_timestamp">{reviewData.timestamp}</p>
      </div>

  );
}

export default ReviewCard;
