import { configureStore, createSlice } from "@reduxjs/toolkit";
import { mockedData } from "./mockedData";

// In order to make testing easier, 30 fake employees had been added to the database (stored in mockedData.js)
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
