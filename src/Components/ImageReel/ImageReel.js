import React from "react";

import Slider from "react-slick";
import Jeep_Cherokee from "./Jeep_Cherokee.jpg"
import Buick_Encore from "./Buick_Encore.jpg"
import Hyundai_Elantra from "./Hyundai_Elantra.jpg"


function ImageReel({cars}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Slider {...settings}>         
      <div>      
           <img src={Jeep_Cherokee} alt="Car" />
        </div>
        <div>
          <img src={Buick_Encore} alt="car" />
        </div>
        <div>
          <img src={Hyundai_Elantra} alt="car" />
        </div>     
      </Slider>

      </div>
  );
}

export default ImageReel;
