// src/features/profit/profitSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfitState {
  initialInvestment: number;
  months: number;
  trxRate: number;
  exchangeRate: number;
  selectCalculationMode: 'TRX' | 'USDT' | 'UAH';
  totalProfit: number;
  clearProfit: number;
  monthlyProfit: number;
  dailyProfit: number;
}

const initialState: ProfitState = {
  initialInvestment: 0,
  months: 12,
  trxRate: 0.116,
  exchangeRate: 4.69,
  selectCalculationMode: 'TRX',
  totalProfit: 0,
  clearProfit: 0,
  monthlyProfit: 0,
  dailyProfit: 0,
};

const profitSlice = createSlice({
  name: 'profit',
  initialState,
  reducers: {
    setInitialInvestment(state, action: PayloadAction<number>) {
      state.initialInvestment = action.payload;
    },
    setMonths(state, action: PayloadAction<number>) {
      state.months = action.payload;
    },
    setTrxRate(state, action: PayloadAction<number>) {
      state.trxRate = action.payload;
    },
    setExchangeRate(state, action: PayloadAction<number>) {
      state.exchangeRate = action.payload;
    },
    setCalculationMode(state, action: PayloadAction<'TRX' | 'USDT' | 'UAH'>) {
      state.selectCalculationMode = action.payload;
    },
    calculate(state) {
      const profitMultiplier = 1.34784;
      state.totalProfit = state.initialInvestment * Math.pow(profitMultiplier, state.months);
      state.clearProfit = state.totalProfit - state.initialInvestment;
      state.monthlyProfit = state.clearProfit / state.months;
      state.dailyProfit = state.monthlyProfit / 30;
    },
  },
});

export const {
  setInitialInvestment,
  setMonths,
  setTrxRate,
  setExchangeRate,
  setCalculationMode,
  calculate,
} = profitSlice.actions;

export const selectProfit = (state: { profit: ProfitState }) => state.profit;

export default profitSlice.reducer;
