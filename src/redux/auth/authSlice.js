import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, active) => {
        console.log(active);

        state.user = active.payload.user;
        state.isLoggedIn = true;
        state.token = active.payload.token;
      })
      .addCase(login.fulfilled, (state, active) => {
        state.user = active.payload.user;
        state.isLoggedIn = true;
        state.token = active.payload.token;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
        state.token = "";
      })
      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export default authSlice.reducer;
