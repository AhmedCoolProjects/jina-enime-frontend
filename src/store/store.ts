import { configureStore } from "@reduxjs/toolkit";
import { modeReducer } from "./reducers";

export const appStore = configureStore({
  reducer: {
    mode: modeReducer,
  },
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
