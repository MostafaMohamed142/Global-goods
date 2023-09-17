
import { useDispatch, useSelector } from 'react-redux';
import { incrementItemQuantity, decrementItemQuantity, removeFromCart, cartItem } from '../redux/cartslice';
import { decrement } from '../redux/countslice';
import { RootState } from '../redux/store';

const Cart = () => {
  const cartItems = useSelector((state:RootState) => state.cart);
  const dispatch = useDispatch();
  const handleIncrement = (itemId:number) => {
    dispatch(incrementItemQuantity({id: itemId}));
  };

  const handleDecrement = (itemId:number) => {
    dispatch(decrementItemQuantity({id: itemId }));
  };
  const handleRemoveItem = (itemId: number, itemQuantity: number) => {
    dispatch(removeFromCart(itemId));
    
    dispatch(decrement()); // Decrement the count in countslice by itemQuantity
  };
    const totalPrice = cartItems.reduce((total,item)=>{
      return  Math.round(( total + item.price*item.quantity))
    },0)
  return (
    <div>
      <h2>{cartItems.length===0? "YOUR CART IS EMPTY" : ""}</h2>

      {cartItems &&
        cartItems.map((item:cartItem) => (
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
              <button className="m-auto text-blue-600" onClick={() => handleDecrement(item.id)} disabled={item.quantity===1}>
                <i className="fa-solid fa-minus text-md"></i>
              </button>
              <button className="m-auto" onClick={()=>handleRemoveItem(item.id,item.quantity)}>
                <i className="fa-solid fa-trash text-md text-red-500"></i>
              </button> 
            </div>
          </div>
        ))}
        <hr/>
          {/* <button onClick={()=>handlePrice}>calcaute price</button> */}
          <span>totalPrice : {totalPrice}</span>
    </div>
  );
};

export default Cart;



