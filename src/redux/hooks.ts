import { useSelector as useReduxSelector, TypedUseSelectorHook } from "react-redux";
import { RootType } from "./store";

export const useSelector: TypedUseSelectorHook<RootType> = useReduxSelector;
