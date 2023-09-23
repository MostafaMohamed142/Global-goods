import React from 'react'
import Marquee from "react-fast-marquee";
import { silder } from '../images';
// import { nike, reebok, zara } from '../images';

const Marque = () => {
  return (
    <div>
        <Marquee pauseOnHover={true} className='p-5'>
           {silder.map((item)=>{
            return (
              <img src={item.img} alt="slider" loading='lazy' key={item.name} className='lg:w-auto md:w-1/2 sm:w-40' />
            )
           })}
        </Marquee>
    </div>
  )
}

export default Marque