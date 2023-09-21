import React from "react";
import "./Reviews.css";
import Review from "./Review";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Reviews({ reviews }) {
    return (
        <div className="reviews_container">
            <h3 className="reviewsTitle">Recent Reviews</h3>
            <div className="navigationReviewBtn">
                <NavigateBeforeIcon />
                <NavigateNextIcon />
            </div>
            <div className="reviews_row">
                {reviews.map((review, index) => (
                    <Review key={index} {...review} />
                ))}
            </div>
        </div>
    );
}

export default Reviews;
