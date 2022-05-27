import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModeState {
  isDark: boolean;
}

const initialState: ModeState = {
  isDark: false,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeModeAction: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { changeModeAction } = modeSlice.actions;
// selector
export const modeReducer = modeSlice.reducer;
