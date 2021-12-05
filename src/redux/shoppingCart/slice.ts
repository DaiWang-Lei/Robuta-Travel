import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stat } from "fs";

interface ShoppingCartState {
  loading: boolean;
  error: undefined | null;
  data: any[];
}

const initialState: ShoppingCartState = {
  loading: true,
  error: null,
  data: [],
};

// 获取购物车商品
export const getShoppingCart = createAsyncThunk(
  "shoppingCart/getShoppingCart",
  async (jwt: string) => {
    const { data } = await axios.get(`/api/shoppingCart/getShoppingCart`, {
      headers: {
        Authorization: `bearer ${jwt}`,
      },
    });
    return data.shoppingCartItems;
  }
);

// 添加购物车
export const addShoppingCartItem = createAsyncThunk(
  "shoppingCart/addShoppingCartItem",
  async ({ jwt, touristRouteId }: { jwt: string; touristRouteId: string }) => {
    const { data } = await axios.post(
      `/api/shoppingCart/addShoppingCartItem`,
      {
        touristRouteId,
      },
      {
        headers: {
          Authorization: `bearer ${jwt}`,
        },
      }
    );
    return data.shoppingCartItems;
  }
);

// 清空购物车
export const clearShoppingCart = createAsyncThunk(
  "shoppingCart/clearShoppingCart",
  async ({ jwt, itemsId }: { jwt: string; itemsId: number[] }) => {
    return await axios.delete(`/api/shoppingCart/clearShoppingCartItem`, {
      headers: {
        Authorization: `bearer ${jwt}`,
      },
    });
  }
);


export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: {
    [getShoppingCart.pending.type]: (state) => {
      state.loading = true;
    },
    [getShoppingCart.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    [getShoppingCart.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addShoppingCartItem.pending.type]: (state) => {
      state.loading = true;
    },
    [addShoppingCartItem.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    [addShoppingCartItem.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [clearShoppingCart.pending.type]: (state) => {
      state.loading = true;
    },
    [clearShoppingCart.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = null;
    },
    [clearShoppingCart.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
