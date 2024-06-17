export const convertTRXToUSDT = (amount: number, trxRate: number): number => {
    return amount * trxRate;
};