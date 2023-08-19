import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import UseFetch from './UseFetch';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/countslice';
import { addItemToCart } from '../redux/cartslice';

const ProductPage = () => {
    const {id}= useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {data,loading,error}=UseFetch(`https://fakestoreapi.com/products/${id}`);
    if(loading){
      return <p>...loading</p>
    }
    if(error){
      return <p>Error{error.message}</p>
    }
    if(!data){
      return <p>No products</p>
    }
  return (
    <div className='p-20'>
      <span className='text-2xl cursor-pointer' onClick={()=> navigate(-1)}><i className='fa-solid fa-arrow-left'></i></span>
      <div className='flex sm:block xs:block md:flex'>
        <img src={data.image} className='w-96 sm:w-50 p-4' alt='productImage' loading='lazy'/>
          <div className='block'>
              <h2 className='text-2xl p-5'>{data.title}</h2>
              <p className='text-md p-6'>{data.description}</p>
              <span className='text-md text-red-600 p-8'>Price: <sup>$</sup>{data.price}</span>
              <br/>
              <span className='text-md p-8'>Rating: {data.rating.rate} -- Count: ({data.rating.count})</span>
              <br/>
              <button type="submit" className='bg-blue-800 text-white rounded-md w-32 p-3 m-8' onClick={()=>{dispatch(addItemToCart(data));dispatch(increment());alert("item added")}}>Add To Cart</button>
          </div>
      </div>
        

    </div>
  )
}

export default ProductPage