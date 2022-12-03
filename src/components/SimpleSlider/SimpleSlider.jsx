import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "components/source/resultImages";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <img src={images[0].original} alt='nature'/>
          <img src={images[1].original} alt='nature'/>
          <img src={images[2].original} alt='nature'/>
          <img src={images[0].original} alt='nature'/>
          <img src={images[1].original} alt='nature'/>
          <img src={images[2].original} alt='nature'/>
        </Slider>
      </div>
    );
  }
}