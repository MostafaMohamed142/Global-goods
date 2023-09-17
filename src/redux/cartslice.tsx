import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export interface cartItem{
  id: number;
  title:string;
  price:number;
  quantity:number
}
const initialState:cartItem[]=[];
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action:PayloadAction<cartItem>) => {
      const newItem = action.payload;
      const existingItemIndex = state.findIndex((item: { id: number; }):boolean => item.id === newItem.id);
      if (existingItemIndex !== -1) {
        state[existingItemIndex] = {
          ...state[existingItemIndex],
          quantity: state[existingItemIndex].quantity + 1,
        };
      } else {
        state.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state ,action:PayloadAction<number>) => {
      const itemId = action.payload;
      return state.filter((item: { id: number }) => item.id !== itemId);
    },
    incrementItemQuantity: (state, action:PayloadAction<{id:number}>) => {
      const itemId = action.payload.id;
      const itemIndex = state.findIndex((item: {id:number}):boolean => item.id === itemId);
      if (itemIndex !== -1) {
        state[itemIndex] = {
          ...state[itemIndex],
          quantity: state[itemIndex].quantity + 1,
        };
      }
    },
    decrementItemQuantity: (state, action:PayloadAction<{id:number}>) => {
      const itemId = action.payload.id;
      const itemIndex = state.findIndex((item:{id:number}):boolean => item.id === itemId);
      if (itemIndex !== -1 && state[itemIndex].quantity > 0) {
        state[itemIndex] = {
          ...state[itemIndex],
          quantity: state[itemIndex].quantity - 1,
        };
      }
    },
    
  },
});

export const {
  addItemToCart,
  removeFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  
} = cartSlice.actions;

export default cartSlice.reducer;