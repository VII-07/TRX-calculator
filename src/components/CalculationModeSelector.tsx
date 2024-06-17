import React from 'react';
import { Radio, Typography } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio';

const { Title } = Typography;

interface CalculationModeSelectorProps {
    value: 'TRX' | 'USDT' | 'UAH';
    onChange: (e: RadioChangeEvent) => void;
}

const CalculationModeSelector: React.FC<CalculationModeSelectorProps> = ({ value, onChange }) => (
    <div>
        <Title level={5}>Оберіть режим розрахунку</Title>
        <Radio.Group onChange={onChange} value={value}>
            <Radio value="TRX">TRX</Radio>
            <Radio value="USDT">USDT</Radio>
            <Radio value="UAH">UAH</Radio>
        </Radio.Group>
    </div>
);

export default CalculationModeSelector;
