import { configureStore } from "@reduxjs/toolkit";
import adminReducer from './adminSlice';
import categoryReducer from "./categorySlice";

export const store = configureStore({
    reducer: {
        admin: adminReducer,
        categories: categoryReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;