import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].qty += 1;
      } else {
        const newCartItem = action.payload;

        state.items.push(newCartItem);
      }
    },
    remove: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex !== -1) {
        if (state.items[itemIndex].qty > 1) {
          state.items[itemIndex].qty -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
