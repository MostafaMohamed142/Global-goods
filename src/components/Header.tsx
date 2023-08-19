import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Header = () => {
    const count = useSelector((state)=> state.counter.count)
    const [toggle,setToggle]=useState(false)
    return (
        //  <header className={`fixed w-screen bg-blue-500 z-10 ${toggle ? 'h-screen': ''}`}>
         <header>

            <nav className='lg:flex justify-stretch p-3 bg-slate-500'>
                <div className='m-auto'>
                    <button className='lg:hidden sm:block p-2' onClick={()=>setToggle(!toggle)}
                    ><i className='fa-solid fa-bars'></i>
                    </button>
                    <Link to='/' className='p-2 text-md lg:flex items-start sm:hidden xs:hidden '>
                        Global Goods
                    </Link>
                </div>
                <div className='m-auto lg:flex sm:hidden'>
                    <ul className='lg:flex sm:hidden xs:hidden justify-center gap-3'>
                        <Link to='/'>
                            <li className='text-lg'>
                                Home
                            </li>
                        </Link>
                        <Link to='/products' className='hover:underline decoration-white'>
                            <li className='text-lg'>
                                Products
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='m-auto relative lg:flex justify-between items-end sm:hidden xs:hidden gap-4'>
                    <Link to='/cart'>
                    <span className='absolute left-4 bottom-4 text-red-600'>{count}</span>
                    <button type="submit" className='text-lg'><i className='fa-solid fa-shopping-cart'></i></button>
                    </Link>

                    
                    <Link>
                    <button type="submit" className='text-lg pl-5'><i className="fa-solid fa-right-to-bracket text-md mr-3"></i>Log In</button>
                    </Link>
                    
                </div>
                {/* mobile view */}
                <div className={`bg-red-400 w-96 h-96 p-10 ${toggle? 'block' : 'hidden'}`}>
                    <ul>
                        <li className='text-md mb-3'>Home</li>
                        <li className='text-md'>Products</li>
                    </ul>
                        <br/>
                    <Link>
                    <span className='relative -top-4 text-red-600'>{count}</span>
                    <button type="submit" className='text-lg'><i className='fa-solid fa-shopping-cart'></i></button>
                    </Link>
                    <br/>
                    <Link>
                    <button type="submit" className='text-lg mt-44'><i className="fa-solid fa-right-to-bracket text-md mr-3"></i>Log In</button>
                    </Link>
                </div>
            </nav>
            
                
                
            
        </header>
    )
  
}

export default Header