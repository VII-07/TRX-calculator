import React from 'react';
import { Layout } from 'antd';
import '../style/Footer.scss'

const { Footer } = Layout;

const AppFooter: React.FC = () => {
    return (
        <Footer className={'footer'}>
            Profit Calculator ©2024 Created by Bogdan Bayurchak
        </Footer>
    );
};

export default AppFooter;