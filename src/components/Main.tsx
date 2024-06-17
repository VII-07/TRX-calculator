import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Row, Col, Button } from 'antd';
import { calculate } from '../features/profit/profitSlice';

import { RootState } from '../store';
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
  const profitState = useSelector((state: RootState) => state.profit);
  const calculationMode = profitState.selectCalculationMode;
  
  const handleCalculate = () => {
    dispatch(calculate());
  };

  return (
    <Content className={style.content}>
      <Row gutter={[16, 16]}>
        <Col span={24} md={8}>
          <InvestmentInput value={profitState.initialInvestment} />
        </Col>
        <Col span={24} md={8}>
          <PeriodInput value={profitState.months} />
        </Col>
        {(calculationMode === 'USDT' || calculationMode === 'UAH') && (
          <Col span={24} md={8}>
            <ExchangeRateInput
              value={calculationMode === 'USDT' ? profitState.trxRate : profitState.exchangeRate}
              mode={calculationMode}
            />
          </Col>
        )}
        <Col span={24}>
          <Button className={style.result__btn} onClick={handleCalculate}>Розрахувати</Button>
        </Col>
        <Col span={24}>
          <CalculationModeSelector value={calculationMode} />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ paddingTop: '1rem' }}>
        <Col span={24} md={12} className={style.center__content}>
          <Results
            months={profitState.months}
            calculationMode={calculationMode}
            trxRate={profitState.trxRate}
            exchangeRate={profitState.exchangeRate}
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
