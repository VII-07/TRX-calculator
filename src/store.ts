// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import profitReducer from './features/profit/profitSlice';

export const store = configureStore({
  reducer: {
    profit: profitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
