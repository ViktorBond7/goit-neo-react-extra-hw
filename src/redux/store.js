import { configureStore } from "@reduxjs/toolkit";
import contactsSliceReducer from "./contacts/contactsSlice";
import filtersSliceReducer from "./filters/filtersSlice";
import authSliceReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filters: filtersSliceReducer,
    auth: authSliceReducer,
  },
});
