import { Store } from "antd/lib/form/interface";
import { createStore } from "redux";
import languageReducer from "./language/languageReducer";

const store = createStore(languageReducer);
export type RootType = ReturnType<typeof store.getState>;

export default store;
