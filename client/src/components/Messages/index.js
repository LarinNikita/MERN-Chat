import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../../redux/slices/messages';

import { Empty, Spin } from 'antd';

import { Message } from '../'

import './Messages.scss';

const Messages = () => {
    const dispatch = useDispatch();

    const messagesRef = useRef(null);

    const selectedDialogId = useSelector((state) => state.dialogs.currentDialogId);
    const { messages } = useSelector((state) => state.messages);
    const isMessagesLoading = messages.status === 'loading';

    useEffect(() => {
        if (selectedDialogId) {
            dispatch(fetchMessages(selectedDialogId));
        }
    }, [dispatch, selectedDialogId]);

    useEffect(() => {
        messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
    }, [messages.data])

    return (
        <div className="messages" ref={messagesRef}>

            {!selectedDialogId && <Empty description="Откройте диалог" />}

            {selectedDialogId && isMessagesLoading && <Spin size="large" />}

            {selectedDialogId && !isMessagesLoading && messages.data.length === 0 && (
                <Empty description="Нет сообщений" />
            )}

            {selectedDialogId && !isMessagesLoading && messages.data.length > 0 && (
                messages.data.map((item) =>
                    <Message key={item._id} {...item} />
                )
            )}

        </div>
    )
};

export default Messages;