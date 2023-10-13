import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";
import favouriteReducer from "./slices/favouriteSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    favourite: favouriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
