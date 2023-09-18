import React from "react";
import Slider from "react-slick";
import car1 from "./Civic_Rojo.jpg"
import car2 from "./car2.jpg"
import car3 from "./car3.jpg"

function ImageReel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Slider {...settings}>
        <div>
          <img src={car1} alt="Car" />
        </div>
        <div>
          <img src={car2} alt="car" />
        </div>
        <div>
          <img src={car3} alt="car" />
        </div>
    
      </Slider>
    </div>
  );
}

export default ImageReel;
