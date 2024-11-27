// REDUX Store gaan configureren

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites/slice";
import counterReducer from "./counter/slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";


const persistConfig = {
    key: "state",
    version: 1,
    storage: AsyncStorage,
    // Om onze counterReducer niet meer te persisten in de AsyncStorage
    blacklist: ['counter']
}

// Om meerdere reducers te kunnen gaan koppelen
const rootReducer = combineReducers({
    favorites: favoritesReducer,
    counter: counterReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store aangemaakt -> Magazijn aangemaakt
export const store = configureStore({
    reducer: persistedReducer,
    // React Native -> AsyncStorage voor actions te gaan negeren
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export const persistor = persistStore(store);


type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();