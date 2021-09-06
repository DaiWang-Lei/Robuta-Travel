import { Middleware } from "redux";

export const actionLog: Middleware = (store) => (next) => (action) => {
  console.log("state 上一个", store.getState());
  console.log("fire action", action);
  next(action);
  console.log("更新后的state", store.getState());
};
