import { login, logOut, register } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  email: null,
  token: null,
  id: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      console.log('action', action);
      state.email = action.payload.user.email;
      state.token = action.payload.user.accessToken;
      state.id = action.payload.user.uid;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      console.log('action', action);
      state.email = action.payload.user.email;
      state.token = action.payload.user.accessToken;
      state.id = action.payload.user.uid;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.isLoggedIn = false;
    },
  },
  reducers: {
    refreshUser(state, action) {
      console.log('action', action);
      state.email = action.payload.email;
      state.token = action.payload.accessToken;
      state.id = action.payload.uid;
      state.isLoggedIn = true;
    },
  },
});

export const { refreshUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
