import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const DateSlice = createSlice({
  name: "date",
  initialState: { value: moment().format("YYYY-MM") },
  reducers: {
    updateDate(state, action) {
      state.value = action.payload;
    },
  },
});

export const { updateDate } = DateSlice.actions;

export default DateSlice.reducer;
