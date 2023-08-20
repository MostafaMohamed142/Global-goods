import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart: (state:any, action:any) => {
      const newItem = action.payload;
      const existingItemIndex = state.findIndex((item: { id: any; }) => item.id === newItem.id);
      if (existingItemIndex !== -1) {
        state[existingItemIndex] = {
          ...state[existingItemIndex],
          quantity: state[existingItemIndex].quantity + 1,
        };
      } else {
        state.push({ ...newItem, quantity: 0 });
      }
    },
    removeFromCart: (state:any ,action:any) => {
      const itemId = action.payload;
      return state.filter((item: { id: any; }) => item.id !== itemId);
    },
    incrementItemQuantity: (state:any, action:any) => {
      const itemId = action.payload;
      const itemIndex = state.findIndex((item: {id:any}) => item.id === itemId);
      if (itemIndex !== -1) {
        state[itemIndex] = {
          ...state[itemIndex],
          quantity: state[itemIndex].quantity + 1,
        };
      }
    },
    decrementItemQuantity: (state:any, action:any) => {
      const itemId = action.payload;
      const itemIndex = state.findIndex((item:{id:any}) => item.id === itemId);
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