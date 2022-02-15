import { configureStore } from '@reduxjs/toolkit';
import { reducer as counterReducer } from './counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
