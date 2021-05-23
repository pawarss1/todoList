import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { tasksDataSlice } from './tasksDataSlice';

const rootReducer = combineReducers({
  tasks: tasksDataSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
