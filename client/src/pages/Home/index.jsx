import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { socket } from '../../core';
import { selectIsAuth } from '../../redux/slices/user';
import { fetchDialogs } from '../../redux/slices/dialogs';

import { SideBar, Chat } from '../../components'

import { Layout, Empty } from 'antd'

import './Home.scss'

const { Content } = Layout;

const Home = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    const { dialogs } = useSelector((state) => state.dialogs);
    const isDialogsLoading = dialogs.status === 'loading';
    const selectedDialogId = useSelector((state) => state.dialogs.currentDialogId);

    const onNewDialog = () => {
        dispatch(fetchDialogs());
    }

    useEffect(() => {
        dispatch(fetchDialogs());
        
        socket.on('SERVER:DIALOG_CREATED', onNewDialog);
        return () => {
            socket.removeListener('SERVER:DIALOG_CREATED', onNewDialog);
        }
    }, [dispatch]);

    if (!window.localStorage.getItem('token') && !isAuth) {
        return <Navigate to="/login" />;
    }

    return (
        <Layout className='wrapper'>
            <SideBar items={dialogs.data} isLoading={isDialogsLoading} />
            <Layout className='chat'>
                {selectedDialogId ? (
                    <Chat items={dialogs.data} />
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