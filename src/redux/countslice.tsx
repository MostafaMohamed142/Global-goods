import { createSlice } from '@reduxjs/toolkit'
 type counter ={
  count:number,
}
const initialState:counter = {
  count:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state:counter) => {
      state.count += 1
    },
    decrement: (state:counter) => {
      state.count -=1
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer