import React from 'react';
import { Input, Typography } from 'antd';
import style from '../style/InputStyle.module.scss';

const { Title } = Typography;

interface ExchangeRateInputProps {
    value: number;
    onChange: (value: number) => void;
    mode: 'TRX' | 'USDT' | 'UAH';
}

const ExchangeRateInput: React.FC<ExchangeRateInputProps> = ({ value, onChange, mode }) => (
    <div>
        <Title level={5}>
            Курс обміну ({mode === 'USDT' ? 'TRX/USDT' : 'TRX/UAH'})
        </Title>
        <Input
            className={style.input__color}
            type="number"
            placeholder={`Курс обміну (${mode === 'USDT' ? 'TRX/USDT' : 'TRX/UAH'})`}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
        />
    </div>
);

export default ExchangeRateInput;
