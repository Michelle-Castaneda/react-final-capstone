import React from "react";
import "./Reviews.css";
import car1 from "../ImageReel/Civic_Rojo.jpg"
import StarIcon from '@mui/icons-material/Star';

function Reviews (props) {
    const {review_id,title,rating,timestamp,review} = props
    return (
        <div>
          <div className="reviews">
            <div className="review_info">
                <div className="review_title">{title}</div>
                <div className="review_rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <StarIcon key={i}/>
                    ))}
                </div>
                <div className="review_text">{review}</div>
                <div className="review_timestamp">{timestamp}</div>
            </div>
           
          </div>


        </div>
    )
}

export default Reviews;