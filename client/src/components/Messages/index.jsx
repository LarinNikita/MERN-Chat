import React, { useRef, useEffect } from 'react';
import { socket } from '../../core';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, fetchMessages } from '../../redux/slices/messages';

import { Empty, Spin } from 'antd';

import { Message } from '..'

import './Messages.scss';

const Messages = () => {
    const userData = useSelector((state) => state.user.data);
    const dispatch = useDispatch();

    const messagesRef = useRef(null);

    const selectedDialogId = useSelector((state) => state.dialogs.currentDialogId);
    const { messages } = useSelector((state) => state.messages);
    const isMessagesLoading = messages.status === 'loading';

    const onNewMessage = data => {
        dispatch(addMessage(data))
    }

    useEffect(() => {
        if (selectedDialogId) {
            dispatch(fetchMessages(selectedDialogId));
        }

        socket.on('SERVER:MESSAGE_CREATED', onNewMessage);

        return () => {
            socket.removeListener('SERVER:MESSAGE_CREATED', onNewMessage)
        }
    }, [dispatch, selectedDialogId]);

    useEffect(() => {
        messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
    }, [messages.data]);

    return (
        <div className="messages" ref={messagesRef}>

            {!selectedDialogId && <Empty description="Откройте диалог" />}

            {selectedDialogId && isMessagesLoading && <Spin size="large" />}

            {selectedDialogId && !isMessagesLoading && messages.data.length === 0 && (
                <Empty description="Нет сообщений" />
            )}

            {selectedDialogId && !isMessagesLoading && messages.data.length > 0 && (
                messages.data.map((item) =>
                    <Message key={item._id} {...item} isMe={item.user._id === userData?._id}/>
                )
            )}

        </div>
    )
};

export default Messages;