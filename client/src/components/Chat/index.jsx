import React from 'react'
import { useSelector } from 'react-redux';

import { Layout, Typography, Badge, Button } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons';

import { ChatInput, Messages } from '../../components'

const { Header, Content } = Layout;
const { Text } = Typography;

const Chat = ({ items }) => {

    const userData = useSelector((state) => state.user.data);

    const selectedDialogId = useSelector((state) => state.dialogs.currentDialogId);

    const currentChat = items.find((item) => item._id === selectedDialogId);

    let user = currentChat && (
        currentChat.sender._id === userData._id
            ? currentChat.recipient
            : currentChat.sender
    ) || {};

    if (currentChat && currentChat.sender._id === currentChat.recipient._id) {
        user = {
            fullname: 'Избранное',
        };
    }

    return (
        <>
            <Header className='chat__header'>
                <div />
                <div className='chat__header--user'>
                    <Text strong >
                        {user.fullname}
                    </Text>

                    {user.fullname === 'Избранное' ? null : (
                        <Badge
                            status={user.isOnline ? "success" : "default"}
                            text={<Text type='secondary'>{user.isOnline ? "Онлайн" : "Офлайн"} </Text>}
                        />
                    )}

                </div>
                <Button
                    type="link"
                    shape="circle"
                    icon={<EllipsisOutlined style={{ fontSize: '22px' }} />}
                />
            </Header>
            <Content className='chat__messages' >
                <Messages />
            </Content>
            <ChatInput className='chat__input' />
        </>
    )
}

export default Chat