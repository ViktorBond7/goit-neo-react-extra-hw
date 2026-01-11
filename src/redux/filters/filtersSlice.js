import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  number: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
      state.number = "";
    },
    changeFilterByNumber(state, action) {
      state.number = action.payload;
      state.name = "";
    },
  },
});

export default filtersSlice.reducer;

export const { changeFilter, changeFilterByNumber } = filtersSlice.actions;

//////// selectors/////////
export const selectNameFilter = (state) => state.filters.name;

export const selectNumberFilter = (state) => state.filters.number;
