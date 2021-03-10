import { createSlice } from "@reduxjs/toolkit";

const BillSlice = createSlice({
  name: "bill",
  initialState: { bills: [] },
  reducers: {
    add(state, action) {
      state.bills.push(action.payload);
    },
    remove(state, action) {
      const bills = [...state.bills];
      const id = action.payload;
      const index = bills.findIndex((bill) => bill.id === id);
      bills.splice(index, 1);
      state.bills = bills;
    },
    edit(state, action) {
      const bills = [...state.bills];
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
      state.bills = bills;
    },
    clear(state) {
      state.bills = [];
    },
  },
});

export const { add, clear, remove, edit } = BillSlice.actions;

export default BillSlice.reducer;
