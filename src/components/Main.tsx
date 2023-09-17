import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dior, dior2, fashion, shoes, shoes2, watch } from '../images';
import HomePage from './HomePage';
const Main = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };
  return (
    <>
    <Slider {...settings} className='w-3/5 m-auto'>
    <div className=''>
      <img src={dior} alt='ph' className='w-full rounded mt-5' style={{height: '31rem'}}/>
      <div>
        <h1>text</h1>
      </div>
    </div>
    <div>
    <img src={fashion} alt='ph' className='w-full rounded mt-5' style={{height: '31rem'}}/>
    </div>
    <div>
    <img src={shoes} alt='ph' className='w-full rounded mt-5' style={{height: '31rem'}}/>
    </div>
    <div>
    <img src={shoes2} alt='ph' className='w-full rounded mt-5' style={{height: '31rem'}}/>
    </div>
    <div>
    <img src={watch} alt='ph' className='w-full rounded mt-5' style={{height: '31rem'}}/>
    </div>
    <div>
    <img src={dior2} alt='ph' className='w-full rounded mt-5' style={{height: '31rem'}}/>
      
    </div>
  </Slider>
  <div>
    <HomePage/>
  </div>
  </>
  )
}

export default Main