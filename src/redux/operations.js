import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const register = createAsyncThunk(
  'user/setUser',
  async (credentials, thunkAPI) => {
    try {
      const auth = getAuth();
      const { email, password } = credentials;
      const res = await createUserWithEmailAndPassword(auth, email, password);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const auth = getAuth();
      const { email, password } = credentials;
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    const auth = getAuth();
    const res = await signOut(auth);
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const refreshUser = createAsyncThunk(
//   'user/refresh',
//   async (_, thunkAPI) => {
//     try {
//       const auth = getAuth();

//       const res = onAuthStateChanged(auth, (currentUser) => {return currentUser});

//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
