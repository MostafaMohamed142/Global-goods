import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
        uid: string;
        displayName?:string | null ;
        email : string;
}
interface UserState {
  user: User | null;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setError } = userSlice.actions;
export default userSlice.reducer;
