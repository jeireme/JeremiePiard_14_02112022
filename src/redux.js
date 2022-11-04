import { configureStore, createSlice } from "@reduxjs/toolkit";
import { mockedData } from "./mockedData";

const userSlice = createSlice({
  name: "users",
  initialState: mockedData,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

export const { addUser } = userSlice.actions;
