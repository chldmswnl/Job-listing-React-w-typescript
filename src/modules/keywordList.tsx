import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE: string[] = [];

export const keywordSlice = createSlice({
  name: "keywordList",
  initialState: INITIAL_STATE,
  reducers: {
    setKeyword(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const { actions, reducer } = keywordSlice;
export const { setKeyword } = actions;
export default reducer;
