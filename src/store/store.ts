import { configureStore } from "@reduxjs/toolkit";
import { modeReducer, userReducer } from "./reducers";

export const appStore = configureStore({
  reducer: {
    mode: modeReducer,
    user: userReducer,
  },
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
