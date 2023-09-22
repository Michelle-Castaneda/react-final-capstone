import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import SearchBar from "../SearchBar/SearchBar"
import ImageReel from "../ImageReel/ImageReel";
import Review from "../Review/Review";
import Footer from "../Footer/Footer";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Home() {
  return (
    <div className="home">
      <span className="hometitle">Find your next car here</span>
      <div className="inventory_reel">
        <ImageReel />
      </div>


      <div >
      <Link to="/appointment" className="scheduleBtn">
      <button className="schedule">Schedule a Test Drive</button>
          </Link>
    </div>



      <div className="search_bar">
        <SearchBar />
      </div>

      <div className="introduction_container">
        <div className="introduction_title">A Decade of Trusted Experience</div>

        <div className="introduction_body">
          Gofer Motors LLC offers an extensive range of top-quality used
          cars, each meticulously inspected and serviced to ensure our customers
          receive the best value for their investment. Our deep-rooted
          commitment to excellence, combined with our rich experience of over 10
          years, makes us the go-to choice for those looking for their next
          vehicle. At Gofer Motors LLC, we don't just sell cars; we
          sell trust, quality, and a lasting relationship.
        </div>
      </div>

      <div className="reviews_container">
      <h3 className="reviewsTitle">Recent Reviews</h3>
      <div className="navigationReviewBtn">
<NavigateBeforeIcon />
<NavigateNextIcon />
</div>
        <div className="reviews_row">
          <div className="review1">
            <Review
              review_id=""
              title=""
              rating={5}
              timestamp="m"
              review="fdfd"
            />
          </div>
          <div className="review2">
            <Review
              review_id=""
              title=""
              rating={5}
              timestamp="t"
              review="fdfd"
            />
          </div>
          <div className="review3">
            <Review
              review_id=""
              title=""
              rating={5}
              timestamp="t"
              review="fdfd"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
