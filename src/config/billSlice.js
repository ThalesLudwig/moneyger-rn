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
      const { newBill, month, year } = action.payload;
      const index = bills.findIndex((bill) => bill.id === newBill.id);

      if (bills[index].title !== newBill.title) {
        bills[index].title = newBill.title;
      }
       if (!bills[index].data[year]) {
        bills[index].data[year] = { [month]: newBill };
      } else if (!bills[index].data[year][month]) {
        bills[index].data[year][month] = newBill;
      } else {
        bills[index].data[year][month] = {
          ...bills[index].data[year][month],
          ...newBill,
        };
      }
      state.value = bills;
    },
    clear(state) {
      state.value = [];
    },
  },
});

export const { add, clear, remove, edit } = BillSlice.actions;

export default BillSlice.reducer;
