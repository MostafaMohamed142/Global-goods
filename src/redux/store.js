import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./countslice";
import { cartSlice } from "./cartslice";


const store = configureStore({
    reducer: {
        counter : counterSlice.reducer,
        cart : cartSlice.reducer,
        // quantity : quantitySlice,
        
    },

  
})
export default store;