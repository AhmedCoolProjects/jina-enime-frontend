import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  first_name: string;
  last_name: string;
  email: string;
  room_number: string;
  token: string;
  _id: string;
  email_verified: boolean;
}

const initialState: UserState = {
  first_name: "",
  last_name: "",
  email: "",
  room_number: "",
  token: "",
  _id: "",
  email_verified: false,
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
      state._id = action.payload._id;
      state.email_verified = action.payload.email_verified;
    },
    logoutAction: (state) => {
      state.first_name = "";
      state.last_name = "";
      state.email = "";
      state.room_number = "";
      state.token = "";
      state._id = "";
      state.email_verified = false;
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
// selector
export const userReducer = userSlice.reducer;
