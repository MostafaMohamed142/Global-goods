import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UseFetch from './UseFetch';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/countslice';
import { addItemToCart } from '../redux/cartslice';
import { RootState } from '../redux/store';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assets, loading, error } = UseFetch(`https://fakestoreapi.com/products/${id}`);
  console.log(assets)

  // Access the cart state from Redux
  const cartItems = useSelector((state: RootState) => state.cart);

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>Error{error}</p>;
  }
  if (!assets) {
    return <p>No products</p>;
  }

  // Check if the product is already in the cart
  const isProductInCart = cartItems.some((item) => item.id === assets.id);

  return (
    <div className='p-20'>
      <span className='text-2xl cursor-pointer' onClick={() => navigate(-1)}>
        <i className='fa-solid fa-arrow-left'></i>
      </span>

      <div className='flex sm:block xs:block md:flex'>
        <img src={assets.image} className='w-96 sm:w-50 p-4' alt='productImage' loading='lazy' />
        <div className='block'>
          <h2 className='text-2xl p-5'>{assets.title}</h2>
          <p className='text-md p-6'>{assets.description}</p>
          <span className='text-md text-red-600 p-8'>
            Price: <sup>$</sup>
            {assets.price}
          </span>
          <br />
          <span className='text-md p-8'>Rating: {assets.rating.rate} -- Count: ({assets.rating.count})</span>
          <br />
          <button
            type='submit'
            className='bg-blue-800 text-white rounded-md w-32 p-3 m-8'
            onClick={() => {
              if (isProductInCart) {
                // If the product is already in the cart, increment its quantity
                dispatch(addItemToCart(assets));
              } else {
                // If the product is not in the cart, add it and increment the counter
                dispatch(addItemToCart({ ...assets, quantity: 1 }));
                dispatch(increment());
              }
              alert('Item added');
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
