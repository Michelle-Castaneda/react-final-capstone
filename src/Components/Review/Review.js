import React from "react";
import "./Review.css";
// import car1 from "../ImageReel/Civic_Rojo.jpg"
import StarIcon from '@mui/icons-material/Star';


function Review ({ title, rating, timestamp, review })  {
    return (
          <div className="reviews">
            <div className="review_container">
            
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
    )
}

export default Review;