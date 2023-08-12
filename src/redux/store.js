import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./countslice"
import cartSlice  from "./cartslice";
import  quantitySlice  from "./quantityslice";
const store = configureStore({
    reducer: {
        counter : counterSlice,
        cart : cartSlice,
        quantity : quantitySlice,
        
    },

  
})
export default store;