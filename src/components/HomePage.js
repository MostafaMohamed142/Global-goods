import React from 'react'
import Home from './Home'
const HomePage = () => {
  
  return (
    <div className='container-2xlg'>
        <div className='lg:flex flex-1 sm:block md:grid md:grid-cols-2 justify-between bg-gray-200 p-3'>
        <Home subTitle='New Arrival' title='jewelery' category='jewelery'/>
        <Home title='electronics' category='electronics'/>
        <Home title='men' category="men's clothing"/>
        <Home title='women' category="women's clothing"/>
          
        </div>
    </div>
  )
}

export default HomePage