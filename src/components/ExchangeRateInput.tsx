import React from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setTrxRate, setExchangeRate } from '../features/profit/profitSlice';
import style from '../style/InputStyle.module.scss';

interface ExchangeRateInputProps {
  value: number;
  mode: 'USDT' | 'UAH';
}

const ExchangeRateInput: React.FC<ExchangeRateInputProps> = ({ value, mode }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h5>Курс обміну ({mode === 'USDT' ? 'TRX/USDT' : 'TRX/UAH'})</h5>
      <Input
        type="number"
        value={value}
        className={style.input__color}
        onChange={(e) =>
          dispatch(mode === 'USDT' ? setTrxRate(Number(e.target.value)) : setExchangeRate(Number(e.target.value)))
        }
      />
    </div>
  );
};

export default ExchangeRateInput;
