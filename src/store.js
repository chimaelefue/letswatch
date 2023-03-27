import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./store/reducers";

export const store = configureStore({
    reducer: {
        movie : movieReducer
    },
})