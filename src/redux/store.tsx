import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./countslice";
import { cartSlice } from "./cartslice";
import {userSlice} from "./UserSlice";


const store = configureStore({
    reducer: {
        Counter : counterSlice.reducer,
        cart : cartSlice.reducer,
        User : userSlice.reducer
    },

  
})
export type RootState = ReturnType<typeof store.getState>;
export default store;