import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/user';
import { Navigate } from 'react-router-dom';

import { Dialogs, Message, ChatInput, Messages } from '../../components'

import { Layout, Typography, Badge, Button } from 'antd'
import { FormOutlined, TeamOutlined, EllipsisOutlined, LogoutOutlined } from '@ant-design/icons';

import './Home.scss'

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const Home = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    const onClickLogout = () => {
        if (window.confirm('Вы действительно хотите выйти?')) {
          dispatch(logout());
          window.localStorage.removeItem('token');
        }
      };

    return (

        <Layout className='wrapper'>
            <Sider className='sidebar' width={320} >
                <Header className='sidebar__header'>
                    <Button
                        className='sidebar__header--btn'
                        type="link"
                        shape="circle"
                        size="small"
                        icon={<LogoutOutlined />}
                        onClick={onClickLogout}
                    />
                    <Title className='sidebar__header--title' level={5}>
                        <TeamOutlined />
                        Список диалогов
                    </Title>
                    <Button
                        className='sidebar__header--btn'
                        type="link"
                        shape="circle"
                        size="small"
                        icon={<FormOutlined />}
                    />
                </Header>
                <Content className='sidebar__content'>
                    {/* <Dialogs /> */}
                </Content>
            </Sider>
            <Layout className='chat'>
                <Header className='chat__header'>
                    <div />
                    <div className='chat__header--user'>
                        <Text strong >Имя пользователя</Text>
                        <Badge status="success" text={<Text type='secondary'>Онлайн</Text>} />
                        {/* <Badge status="default" text={<Text type='secondary'>Офлайн</Text>} /> */}
                    </div>
                    <Button
                        type="link"
                        shape="circle"
                        icon={<EllipsisOutlined style={{ fontSize: '22px' }} />}
                    />
                </Header>
                <Content className='chat__messages' >
                    {/* <Messages /> */}
                </Content>
                <ChatInput className='chat__input' />
            </Layout>
        </Layout>

        //#region test
        // <section className='home' style={{ padding: '10px' }}>
        //     <Dialogs
        //         userId={1}
        //         items={[
        //             {
        //                 _id: Math.random(),
        //                 text: "Lorem Lorem Lorem Lorem Lorem Lorem",
        //                 isReaded: false,
        //                 created_at: new Date(),
        //                 user: {
        //                     _id: 'c20ad4d76fe97759aa27a0c99baa6710',
        //                     fullname: "Иван Иванов",
        //                     avatar: "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
        //                     online: true
        //                 },
        //                 unread: 0
        //             },
        //             {
        //                 _id: Math.random(),
        //                 text: "Автоматический градиент аватарки",
        //                 isReaded: false,
        //                 created_at: new Date(),
        //                 user: {
        //                     _id: 'e4da3b7fbbce2345d7772b0674a318d5',
        //                     fullname: "Фёдор Николаевич",
        //                     avatar: null,
        //                     online: false
        //                 },
        //                 unread: 1
        //             },
        //         ]}
        //     />

        //     <Message
        //         avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        //         text="Веб-сайт, посвященный фирменной стоковой фотографии. С 2021 года он принадлежит Getty Images."
        //         date={date}
        //         isMe={false}
        //         isReaded={false}
        //         attachments={[
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
        //             },
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://plus.unsplash.com/premium_photo-1686090450592-aca413579d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        //             },
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://images.unsplash.com/photo-1682688759350-050208b1211c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        //             },
        //         ]}
        //     />
        //     <Message
        //         avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        //         text="Ого! Скинь ссылку."
        //         date={date}
        //         isMe={true}
        //         isReaded={true}
        //     />
        //     <Message
        //         avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        //         text="Веб-сайт, посвященный фирменной стоковой фотографии. С 2021 года он принадлежит Getty Images."
        //         date={date}
        //         isMe={false}
        //         isReaded={false}
        //     />
        //     <Message
        //         avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        //         text="Ого! Скинь ссылку."
        //         date={date}
        //         isMe={true}
        //         isReaded={false}
        //         attachments={[
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
        //             },
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://plus.unsplash.com/premium_photo-1686090450592-aca413579d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        //             },
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://images.unsplash.com/photo-1682688759350-050208b1211c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        //             },
        //         ]}
        //     />
        //     <Message
        //         avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        //         isMe={false}
        //         isReaded={false}
        //         isTyping
        //     />
        //     <Message
        //         avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        //         date={date}
        //         isMe={false}
        //         isReaded={false}
        //         attachments={[
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
        //             },
        //         ]}
        //     />
        //      <Message
        //         avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        //         date={date}
        //         isMe={false}
        //         isReaded={false}
        //         audio="https://www.myinstants.com/media/sounds/y2mate_HOnnyD0.mp3"
        //     />
        // </section>
        //#endregion
    )
}

export default Home