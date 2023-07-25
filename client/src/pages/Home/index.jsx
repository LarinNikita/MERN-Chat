import React from 'react'
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slices/user';
import { Navigate } from 'react-router-dom';

import { Layout, Empty } from 'antd'
import { SideBar, Chat } from '../../components'

import './Home.scss'

const { Content } = Layout;

const Home = () => {
    const isAuth = useSelector(selectIsAuth);
    const selectedDialogId = useSelector((state) => state.dialogs.currentDialogId);

    if (!window.localStorage.getItem('token') && !isAuth) {
        return <Navigate to="/login" />;
    }

    return (
        <Layout className='wrapper'>
            <SideBar />
            <Layout className='chat'>
                {selectedDialogId ? (
                    <Chat />
                ) : (
                    <Content className='messages' >
                        <Empty description='Выберите, кому хотели бы написать' />
                    </Content>
                )}
            </Layout>
        </Layout>
    )
}

export default Home