import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stat } from "fs";

interface ProductDetailState {
  loading: boolean;
  error: undefined | null;
  data: any;
  commnets: any;
}

const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: [],
  commnets: [],
};

// 获取详情数据
export const getProductDetail = createAsyncThunk("productDetail/getProductDetail", async (touristRouteId: string) => {
  debugger;
  const { data } = await axios.get(`/api/touristRoutes/${touristRouteId}`);
  return data;
});

//获取评论数据
export const getProductComments = createAsyncThunk("productDetail/getProductComments", async () => {
  const { data } = await axios.get("/api/comments");
  return data;
});

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
  },
  extraReducers: {
    [getProductDetail.pending.type]: (state) => {
      debugger;
      state.loading = true;
    },
    [getProductDetail.fulfilled.type]: (state, action) => {
      debugger;
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    [getProductDetail.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getProductComments.fulfilled.type]:(state,action)=>{
      state.commnets = action.payload;
    }
  },
});
