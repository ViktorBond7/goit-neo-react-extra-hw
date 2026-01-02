import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;

//////// selectors/////////
export const selectNameFilter = (state) => state.filters.name;
