import React from 'react';
import { Input, Typography } from 'antd';
import style from '../style/InputStyle.module.scss';

const { Title } = Typography;

interface PeriodInputProps {
    value: number;
    onChange: (value: number) => void;
}

const PeriodInput: React.FC<PeriodInputProps> = ({ value, onChange }) => (
    <div>
        <Title level={5}>Період (місяців)</Title>
        <Input
            type="number"
            className={style.input__color}
            placeholder="Період (місяців)"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
        />
    </div>
);

export default PeriodInput;
