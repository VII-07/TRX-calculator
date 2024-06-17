import React from 'react';
import { Layout } from 'antd';
import style from '../style/Header.module.scss'
import iconTRX from '../assets/image.png';

const { Header } = Layout;

const AppHeader: React.FC = () => {
    return (
        <Header className={style.header}>
            <div>
                <img src={iconTRX} alt="icon" />
                <h1>Tronix APP Profit Calculator</h1>
            </div>
        </Header>
    );
};

export default AppHeader;
