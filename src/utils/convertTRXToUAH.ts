export const convertTRXToUAH = (amount: number, exchangeRate: number): number => {
    return amount * exchangeRate;
};