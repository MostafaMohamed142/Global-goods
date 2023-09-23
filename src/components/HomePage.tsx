import React,{useState} from 'react'
import Home from './Home'
import Marque from './Marquee'
import Accordin from './Accordin'
import { dior, dior2, promo, shoes, watch } from '../images'
const HomePage = () => {
  const [discount,setDiscount] = useState('')
  function getPromo(){
    const discountPercentage = Math.floor(Math.random() * 70) + 1;

    const codeLength = 8;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let promoCode = '';

    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        promoCode += characters.charAt(randomIndex);
    }

    // Combine the discount percentage and code
    console.log(`${discountPercentage}%OFF-${promoCode}`)
    return setDiscount(`${discountPercentage}%OFF-${promoCode}`);
  }
  return (
    <div className='container-2xlg'>
        <div className='lg:flex flex-1 sm:block md:grid md:grid-cols-2 justify-between bg-gray-200 p-3'>
        <Home subTitle='New Arrival' title='jewelery' category='jewelery'/>
        <Home title='electronics' category='electronics' subTitle={undefined}/>
        <Home title='men' category="men's clothing" subTitle={undefined}/>
        <Home title='women' category="women's clothing" subTitle={undefined}/>  
        </div>
        <Marque/>
        <div className='flex' style={{background: 'aliceblue',padding: '50px',marginTop:'3%'}}>
          <div className='m-auto'>
            <h4 className='text-center text-2xl text-red-500 font-bold my-5'>Frequently Asked Questions</h4>
          </div>
          <Accordin />
        </div>
        <div className=''>
            <h2 className='text-center text-3xl p-10 text-blue-600 underline'>Up To 70% On Your First Purchase</h2>
          <div className='flex'>
            <div className='m-auto text-center'>
              <img src={promo} alt='promo code' className='w-full p-2' loading='lazy'/>
              <button className='disBtn' onClick={getPromo}>Get Your Discount Now</button>
              <p>{discount}</p>
            </div>
            <div className='template'>
              <img src={shoes} alt='promo code' className='w-1/2 p-2' loading='lazy'/>
              <img src={watch} alt='promo code' className='w-1/2 p-2' loading='lazy'/>
              <img src={dior} alt='promo code' className='w-1/2 p-2' loading='lazy'/>
              <img src={dior2} alt='promo code' className='w-1/2 p-2' loading='lazy'/>
              
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default HomePage