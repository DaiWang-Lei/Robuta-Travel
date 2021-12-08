import { createStore, combineReducers, applyMiddleware } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { productDetailSlice } from "./productDetail/slice";
import { userSlice } from "./user/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { actionLog } from "./middlewares/actionLog";
import { shoppingCartSlice } from "./shoppingCart/slice";
import { orderSlice } from "./order/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

export const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  user: userSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer,
  order: orderSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({ reducer: persistedReducer, middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog], devTools: true });

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export default { store, persistor };
