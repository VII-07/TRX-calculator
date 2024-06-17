export const calculateProfit = (initialInvestment: number, months: number): number => {
    return initialInvestment * Math.pow(1.34784, months);
};