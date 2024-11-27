// REDUX Store gaan configureren

import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites/slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Store aangemaakt -> Magazijn aangemaakt
export const store = configureStore({
    reducer: favoritesReducer
});


type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();