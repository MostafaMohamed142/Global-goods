import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./countslice";
import { cartSlice } from "./cartslice";


const store = configureStore({
    reducer: {
        Counter : counterSlice.reducer,
        cart : cartSlice.reducer,
        // quantity : quantitySlice,
        
    },

  
})
export type RootState = ReturnType<typeof store.getState>;
export default store;