import { createSlice } from "@reduxjs/toolkit";

const BillSlice = createSlice({
  name: "bill",
  initialState: { value: [] },
  reducers: {
    add(state, action) {
      state.value.push(action.payload);
    },
    remove(state, action) {
      const bills = [...state.value];
      const id = action.payload;
      const index = bills.findIndex((bill) => bill.id === id);
      bills.splice(index, 1);
      state.value = bills;
    },
    edit(state, action) {
      const bills = [...state.value];
      const bill = action.payload;
      const index = bills.findIndex((billInStore) => billInStore.id === bill.id);
      bills[index] = bill;
      state.value = bills;
    },
    clear(state) {
      state.value = [];
    },
  },
});

export const { add, clear, remove, edit } = BillSlice.actions;

export default BillSlice.reducer;
