import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { images } from "components/source/resultImages";
import image1 from 'images/1.JPG';
import image2 from 'images/2.JPG'
import image3 from 'images/3.JPG'
import image4 from 'images/4.JPG'
import image5 from 'images/5.JPG'
import image6 from 'images/6.JPG'
import image7 from 'images/7.JPG'
import image8 from 'images/8.JPG'

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
          <img src={image1} alt='Result of work'/>
          <img src={image2} alt='Result of work'/>
          <img src={image3} alt='Result of work'/>
          <img src={image4} alt='Result of work'/>
          <img src={image5} alt='Result of work'/>
          <img src={image6} alt='Result of work' />
          <img src={image7} alt='Result of work'/>
          <img src={image8} alt='Result of work'/>
        </Slider>
      </div>
    );
  }
}