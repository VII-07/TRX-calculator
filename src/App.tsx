import React from 'react';
import { Layout } from 'antd';
import AppHeader from './components/Header';
import Main from './components/Main';
import AppFooter from './components/Footer';
import './style/App.scss'

const App: React.FC = () => {
    return (
        <Layout className='container'>
            <AppHeader />
            <Main />
            <AppFooter />
        </Layout>
    );
};

export default App;