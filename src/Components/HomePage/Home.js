import React from "react";
import "./Home.css";
import SearchIcon from '@mui/icons-material/Search';
import ImageReel from "../ImageReel/ImageReel";
import Reviews from "../Reviews/Reviews";

function Home () {
    return (
        <div>
             <div className="inventory_reel">
                <ImageReel/>
             </div>

<div className="search_bar">
<input type="text" className="inventory_search" placeholder="Search our inventory" />
<SearchIcon className='search_icon'/>
        </div>

        <div className="introduction_container">
            <div className="introduction_title">A Decade of Trusted Experience</div>
         
            <div className="introduction_body">
            Gofer Motors dealership offers an extensive range of top-quality used cars, 
            each meticulously inspected and serviced to ensure our customers receive the best value for their investment. 
            Our deep-rooted commitment to excellence, combined with our rich experience of over 10 years, makes us the go-to choice 
            for those looking for their next vehicle. 
            At Gofer Motors Car Dealership, we don't just sell cars; we sell trust, quality, and a lasting relationship.
            </div>

</div>

<div className="reviews_container">

<div className="reviews_row">

<div className="review1">
<Reviews
review_id=""
title=""
rating={5}
timestamp={0}
review="fdfd"
/>
</div>
<div className="review2">
<Reviews 
review_id=""
title=""
rating={5}
timestamp={0}
review="fdfd"/>
</div>
<div className="review3">
<Reviews 
review_id=""
title=""
rating={5}
timestamp={0}
review="fdfd"/>
</div>

</div>
</div>

        </div>
    )
}

export default Home;