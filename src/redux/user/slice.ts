import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stat } from "fs";

interface SigninState {
  loading: boolean;
  error: undefined | null;
  token: string | null;
}

const initialState: SigninState = {
  loading: false,
  error: null,
  token: null,
};

// 登录
export const signIn = createAsyncThunk("user/signIn", async (paramters: { password: string; account: string }) => {
  const { data } = await axios.post(`/api/signIn`, {
    account: paramters.account,
    password: paramters.password,
  });
  return data.token;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOut: (state) => {
      state.loading = false;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      debugger;
      state.loading = true;
    },
    [signIn.fulfilled.type]: (state, action) => {
      debugger;
      state.loading = false;
      state.token = action.payload;
      state.error = null;
    },
    [signIn.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
