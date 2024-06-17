import React from 'react';
import { Input, Typography } from 'antd';
import style from '../style/InputStyle.module.scss'

const { Title } = Typography;

interface InvestmentInputProps {
    value: number;
    onChange: (value: number) => void;
}

const InvestmentInput: React.FC<InvestmentInputProps> = ({ value, onChange }) => (
    <div>
        <Title level={5}>Вкладена сума (TRX)</Title>
        <Input
            type="number"
            placeholder="Вкладена сума (TRX)"
            value={value}
            className={style.input__color}
            onChange={(e) => onChange(Number(e.target.value))}
        />
    </div>
);

export default InvestmentInput;
