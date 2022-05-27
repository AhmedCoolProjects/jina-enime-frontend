import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  first_name: string;
  last_name: string;
  email: string;
  room_number: string;
  token: string;
}

const initialState: UserState = {
  first_name: "",
  last_name: "",
  email: "",
  room_number: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<UserState>) => {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.room_number = action.payload.room_number;
      state.token = action.payload.token;
    },
    logoutAction: (state) => {
      state.first_name = "";
      state.last_name = "";
      state.email = "";
      state.room_number = "";
      state.token = "";
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
// selector
export const userReducer = userSlice.reducer;
