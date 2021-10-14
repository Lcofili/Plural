import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  Luckey: null,
};

const Context = createSlice({
  name: "myCounter",
  initialState,
  reducers: {
    addCount: (state) => {
      state.count += 1;
    },
    minusCount: (state) => {
      state.count -= 1;
    },
    myText: (state, action) => {
      state.luckey = action.payload;
    },
  },
});

export const { addCount, minusCount } = Context.actions;
export default Context.reducer;
