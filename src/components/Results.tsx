import React from 'react';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { convertTRXToUAH } from '../utils/convertTRXToUAH';
import { convertTRXToUSDT } from '../utils/convertTRXToUSDT';
import { selectProfit } from '../features/profit/profitSlice';
import style from '../style/Content.module.scss';

const { Title } = Typography;

interface ResultsProps {
    months: number;
    calculationMode: 'TRX' | 'USDT' | 'UAH';
    trxRate: number;
    exchangeRate: number;
}

const Results: React.FC<ResultsProps> = ({ months, calculationMode, trxRate, exchangeRate }) => {
    const profitState = useSelector(selectProfit);

    return (
        <div className={style.result__container}>
            <Title level={5}>Результати:</Title>
            {calculationMode === 'TRX' && (
                <>
                    <p>Профіт грязними за {months} місяців: <span>{profitState.totalProfit.toFixed(3)} TRX</span></p>
                    <p>Профіт чистими за {months} місяців: <span>{profitState.clearProfit.toFixed(3)} TRX</span></p>
                    <p>Заробіток в місяць чистими: <span>{profitState.monthlyProfit.toFixed(3)} TRX</span></p>
                    <p>Заробіток в день чистими: <span>{profitState.dailyProfit.toFixed(3)} TRX</span></p>
                </>
            )}
            {calculationMode === 'USDT' && (
                <>
                    <p>Профіт грязними за {months} місяців: <span>{convertTRXToUSDT(profitState.totalProfit, trxRate).toFixed(3)} USDT</span></p>
                    <p>Профіт чистими за {months} місяців: <span>{convertTRXToUSDT(profitState.clearProfit, trxRate).toFixed(3)} USDT</span></p>
                    <p>Заробіток в місяць чистими: <span>{convertTRXToUSDT(profitState.monthlyProfit, trxRate).toFixed(3)} USDT</span></p>
                    <p>Заробіток в день чистими: <span>{convertTRXToUSDT(profitState.dailyProfit, trxRate).toFixed(3)} USDT</span></p>
                </>
            )}
            {calculationMode === 'UAH' && (
                <>
                    <p>Профіт грязними за {months} місяців: <span>{convertTRXToUAH(profitState.totalProfit, exchangeRate).toFixed(3)} UAH</span></p>
                    <p>Профіт чистими за {months} місяців: <span>{convertTRXToUAH(profitState.clearProfit, exchangeRate).toFixed(3)} UAH</span></p>
                    <p>Заробіток в місяць чистими: <span>{convertTRXToUAH(profitState.monthlyProfit, exchangeRate).toFixed(3)} UAH</span></p>
                    <p>Заробіток в день чистими: <span>{convertTRXToUAH(profitState.dailyProfit, exchangeRate).toFixed(3)} UAH</span></p>
                </>
            )}
        </div>
    );
};

export default Results;
