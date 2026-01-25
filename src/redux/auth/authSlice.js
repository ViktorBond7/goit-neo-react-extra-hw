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
    isError: false,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, active) => {
        state.user = active.payload.user;
        state.isLoggedIn = true;
        state.token = active.payload.token;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, active) => {
        state.user = active.payload.user;
        state.isLoggedIn = true;
        state.token = active.payload.token;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
        state.token = "";
        state.isLoading = false;
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
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
        state.token = "";
      })
      .addMatcher(
        ({ type }) => type.startsWith("auth/") && type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        },
      )
      .addMatcher(
        ({ type }) => type.startsWith("auth/") && type.endsWith("/rejected"),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        },
      );
  },
});

export default authSlice.reducer;
