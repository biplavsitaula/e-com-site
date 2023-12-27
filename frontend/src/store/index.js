import { configureStore } from '@reduxjs/toolkit'
import itemsSlice from './itemsSlice';
import fetchSlice from './fetchSlice'
import bagSlice from './bagSlice';

const mStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchSlice.reducer,
    bag: bagSlice.reducer
  }
})

export default mStore;