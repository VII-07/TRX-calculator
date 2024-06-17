import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface ProfitState {
    initialInvestment: number;
    months: number;
    calculationMode: 'TRX' | 'USDT' | 'UAH';
    totalProfit: number;
    clearProfit: number;
    monthlyProfit: number;
    dailyProfit: number;
}

const initialState: ProfitState = {
    initialInvestment: 0,
    months: 0,
    calculationMode: 'TRX',
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
        setCalculationMode(state, action: PayloadAction<'TRX' | 'USDT' | 'UAH'>) {
            state.calculationMode = action.payload;
        },
        calculate(state) {
            const monthlyRate = 1.34784;
            const totalProfit = state.initialInvestment * Math.pow(monthlyRate, state.months);
            state.totalProfit = totalProfit;
            state.clearProfit = totalProfit - state.initialInvestment;
            state.monthlyProfit = state.clearProfit / state.months;
            state.dailyProfit = state.monthlyProfit / 30;
        },
    },
});

export const { setInitialInvestment, setMonths, setCalculationMode, calculate } = profitSlice.actions;

export const selectProfit = (state: RootState) => state.profit;
export const selectCalculationMode = (state: RootState) => state.profit.calculationMode;

export default profitSlice.reducer;
