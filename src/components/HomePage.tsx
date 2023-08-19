import React from 'react'
import Home from './Home'
const HomePage = () => {
  
  return (
    <div className='container-2xlg'>
        <div className='lg:flex flex-1 sm:block md:grid md:grid-cols-2 justify-between bg-gray-200 p-3'>
        <Home subTitle='New Arrival' title='jewelery' category='jewelery'/>
        <Home title='electronics' category='electronics' subTitle={undefined}/>
        <Home title='men' category="men's clothing" subTitle={undefined}/>
        <Home title='women' category="women's clothing" subTitle={undefined}/>
          
        </div>
    </div>
  )
}

export default HomePage