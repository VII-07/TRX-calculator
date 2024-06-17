import React from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setMonths } from '../features/profit/profitSlice';
import style from '../style/InputStyle.module.scss';

interface PeriodInputProps {
  value: number;
}

const PeriodInput: React.FC<PeriodInputProps> = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h5>Період (місяців)</h5>
      <Input
        type="number"
        className={style.input__color}
        value={value}
        onChange={(e) => dispatch(setMonths(Number(e.target.value)))}
      />
    </div>
  );
};

export default PeriodInput;
