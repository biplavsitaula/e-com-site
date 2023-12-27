import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: 'fetch',
  initialState: {
    fetchDone: false,
    fetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    fetchingStarted: (state) => {
      state.fetching = true;
    },
    fetchingFinished: (state) => {
      state.fetching = false;
    }
  }
});

export const fetchActions = fetchSlice.actions;

export default fetchSlice;