import { createSlice } from "@reduxjs/toolkit";

const InstructionsSlice = createSlice({
  name: "instructions",
  initialState: { value: true },
  reducers: {
    showInstructions(state) {
      state.value = !state.value;
    },
  },
});

export const { showInstructions } = InstructionsSlice.actions;

export default InstructionsSlice.reducer;
