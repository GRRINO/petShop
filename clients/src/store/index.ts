import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
// import { orderApi } from "../services/orderApi";
import { userApiSlice } from "../slices/userApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;