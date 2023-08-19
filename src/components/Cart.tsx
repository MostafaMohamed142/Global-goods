import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementItemQuantity, decrementItemQuantity, removeFromCart } from '../redux/cartslice';
import { decrement } from '../redux/countslice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (itemId) => {
    dispatch(incrementItemQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItemQuantity(itemId));
  };
  
  return (
    <div>
      <h2>Cart</h2>

      {cartItems &&
        cartItems.map((item) => (
          <div className="grid grid-cols-2 md-grid-col-3 sm-block items-center" key={item.id}>
            <div className="p-5">
              <h2 className="text-sm">Product Name:</h2>
              <ol>
                <li className="text-md">{item.title}</li>
              </ol>
            </div>

            <div className="flex justify-center">
              <button className="m-auto text-blue-600" onClick={() => handleIncrement(item.id)}>
                <i className="fa-solid fa-plus text-md"></i>
              </button>
              <div className="block text-center">
                <h2 className="text-center">Quantity</h2>
                <span className="text-center w-10">{item.quantity}</span>
              </div>
              <button className="m-auto text-blue-600" onClick={() => handleDecrement(item.id)}>
                <i className="fa-solid fa-minus text-md"></i>
              </button>
              <button className="m-auto" onClick={() => { dispatch(removeFromCart(item.id)); dispatch(decrement()) }}>
                <i className="fa-solid fa-trash text-md text-red-500"></i>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;

