import React from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio';
import { useDispatch } from 'react-redux';
import { setCalculationMode } from '../features/profit/profitSlice';

interface CalculationModeSelectorProps {
  value: 'TRX' | 'USDT' | 'UAH';
}

const CalculationModeSelector: React.FC<CalculationModeSelectorProps> = ({ value }) => {
  const dispatch = useDispatch();

  const handleModeChange = (e: RadioChangeEvent) => {
    const mode = e.target.value as 'TRX' | 'USDT' | 'UAH';
    dispatch(setCalculationMode(mode));
  };

  return (
    <div>
      <h5>Оберіть режим розрахунку</h5>
      <Radio.Group onChange={handleModeChange} value={value}>
        <Radio value="TRX">TRX</Radio>
        <Radio value="USDT">USDT</Radio>
        <Radio value="UAH">UAH</Radio>
      </Radio.Group>
    </div>
  );
};

export default CalculationModeSelector;
