import React from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setInitialInvestment } from '../features/profit/profitSlice';
import style from '../style/InputStyle.module.scss';

interface InvestmentInputProps {
  value: number;
}

const InvestmentInput: React.FC<InvestmentInputProps> = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h5>Вкладена сума (TRX)</h5>
      <Input
        type="number"
        value={value}
        className={style.input__color}
        onChange={(e) => dispatch(setInitialInvestment(Number(e.target.value)))}
      />
    </div>
  );
};

export default InvestmentInput;
