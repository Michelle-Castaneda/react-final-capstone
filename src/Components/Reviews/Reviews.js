import React from "react";
import "./Reviews.css";
import car1 from "../ImageReel/Civic_Rojo.jpg"
import StarIcon from '@mui/icons-material/Star';

function Reviews (review_id,title,rating,timestamp,review) {
    return (
        <div>
          <div className="reviews">
            <div className="review_info">
                <p className="review_title">{title}</p>
                <p className="review _rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p><StarIcon /></p>
                    ))}
                </p>
                <p className="review_text">{review}</p>
                <p className="review_timestamp">{timestamp}</p>
            </div>
           
          </div>


        </div>
    )
}

export default Reviews;