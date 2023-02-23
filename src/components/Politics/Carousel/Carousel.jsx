import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tbanner1 from "../../../assets/images/Politics/tbanner1.webp";
import tbanner2 from "../../../assets/images/Politics/tbanner2.webp";
import tbanner3 from "../../../assets/images/Politics/tbanner3.webp";
import tbanner4 from "../../../assets/images/Politics/tbanner4.webp";
import tbanner5 from "../../../assets/images/Politics/tbanner5.webp";
import tbanner6 from "../../../assets/images/Politics/tbanner6.webp";
import tbanner7 from "../../../assets/images/Politics/tbanner7.webp";
import tbanner8 from "../../../assets/images/Politics/tbanner8.webp";
import tbanner9 from "../../../assets/images/Politics/tbanner9.webp";
import tbanner10 from "../../../assets/images/Politics/tbanner10.webp";
import tbanner11 from "../../../assets/images/Politics/tbanner11.webp";
import tbanner12 from "../../../assets/images/Politics/tbanner12.webp";
import tbanner13 from "../../../assets/images/Politics/tbanner13.webp";
import tbanner14 from "../../../assets/images/Politics/tbanner14.webp";
import tbanner15 from "../../../assets/images/Politics/tbanner15.webp";
import tbanner16 from "../../../assets/images/Politics/tbanner16.webp";
import tbanner17 from "../../../assets/images/Politics/tbanner17.webp";

export default function Carousel() {
  let images = [
    {
      id: 1,
      img: tbanner1,
    },
    {
      id: 2,
      img: tbanner2,
    },
    {
      id: 3,
      img: tbanner3,
    },
    {
      id: 5,
      img: tbanner5,
    },
    {
      id: 6,
      img: tbanner6,
    },
    {
      id: 7,
      img: tbanner7,
    },
    {
      id: 8,
      img: tbanner8,
    },
    {
      id: 9,
      img: tbanner9,
    },
    {
      id: 10,
      img: tbanner10,
    },
    {
      id: 11,
      img: tbanner11,
    },
    {
      id: 12,
      img: tbanner12,
    },
    {
      id: 13,
      img: tbanner13,
    },
    {
      id: 14,
      img: tbanner14,
    },
    {
      id: 15,
      img: tbanner15,
    },
    {
      id: 16,
      img: tbanner16,
    },
    {
      id: 17,
      img: tbanner17,
    },
  ];
  var settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {images.map((item) => (
        <>
          {" "}
          <div className="slide_img">
            <img src={item.img} alt="image" />{" "}
          </div>
        </>
      ))}
    </Slider>
  );
}
