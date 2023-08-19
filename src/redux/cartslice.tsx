import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.findIndex(item => item.id === newItem.id);
      if (existingItemIndex !== -1) {
        state[existingItemIndex] = {
          ...state[existingItemIndex],
          quantity: state[existingItemIndex].quantity + 1,
        };
      } else {
        state.push({ ...newItem, quantity: 0 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      return state.filter(item => item.id !== itemId);
    },
    incrementItemQuantity: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        state[itemIndex] = {
          ...state[itemIndex],
          quantity: state[itemIndex].quantity + 1,
        };
      }
    },
    decrementItemQuantity: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.findIndex(item => item.id === itemId);
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