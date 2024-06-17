import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Row, Col, Button, RadioChangeEvent } from 'antd';
import { setInitialInvestment, setMonths, setCalculationMode, calculate, selectCalculationMode } from '../features/profit/profitSlice';
import InvestmentInput from './InvestmentInput';
import PeriodInput from './PeriodInput';
import ExchangeRateInput from './ExchangeRateInput';
import CalculationModeSelector from './CalculationModeSelector';
import Results from './Results';
import style from '../style/Content.module.scss';
import SpinningIcon from './SpiningIcon';

const { Content } = Layout;

const Main: React.FC = () => {
    const dispatch = useDispatch();
    const calculationMode = useSelector(selectCalculationMode);

    const [initialValue, setInitialValue] = useState<number>(0);
    const [months, setMonthsValue] = useState<number>(12);
    const [exchangeRate, setExchangeRateValue] = useState<number>(27.5);
    const [trxRate, setTrxRateValue] = useState<number>(0.07);

    const handleCalculate = () => {
        dispatch(setInitialInvestment(initialValue));
        dispatch(setMonths(months));
        dispatch(calculate());
    };

    const handleModeChange = (e: RadioChangeEvent) => {
        const mode = e.target.value as 'TRX' | 'USDT' | 'UAH';
        dispatch(setCalculationMode(mode));
    };

    return (
        <Content className={style.content}>
            <Row gutter={[16, 16]}>
                <Col span={24} md={8}>
                    <InvestmentInput value={initialValue} onChange={setInitialValue} />
                </Col>
                <Col span={24} md={8}>
                    <PeriodInput value={months} onChange={setMonthsValue} />
                </Col>
                {(calculationMode === 'USDT' || calculationMode === 'UAH') && (
                    <Col span={24} md={8}>
                        <ExchangeRateInput
                            value={calculationMode === 'USDT' ? trxRate : exchangeRate}
                            onChange={calculationMode === 'USDT' ? setTrxRateValue : setExchangeRateValue}
                            mode={calculationMode}
                        />
                    </Col>
                )}
                <Col span={24}>
                    <Button className={style.result__btn} onClick={handleCalculate}>Розрахувати</Button>
                </Col>
                <Col span={24}>
                    <CalculationModeSelector value={calculationMode} onChange={handleModeChange} />
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ paddingTop: '1rem' }}>
                <Col span={24} md={12} className={style.center__content}>
                    <Results
                        months={months}
                        calculationMode={calculationMode}
                        trxRate={trxRate}
                        exchangeRate={exchangeRate}
                    />
                </Col>
                <Col className={style.center__content} span={24} md={12}>
                    <SpinningIcon />
                </Col>
            </Row>
        </Content>
    );
};

export default Main;
