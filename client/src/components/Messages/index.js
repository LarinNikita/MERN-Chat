import React, { useRef, useEffect } from 'react';
import { Empty, Spin } from 'antd';
import { Message } from '../'
import { connect } from 'react-redux';
import { messagesActions } from '../../redux/actions';

import './Messages.scss';

const Messages = ({ isLoading, currentDialogId, fetchMessages, items }) => {

    const messagesRef = useRef(null);

    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId);
        }
    }, [currentDialogId]);

    useEffect(() => {
        messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
    }, [items])

    return (
        <div className="messages" ref={messagesRef}>
            {isLoading ? (
                <Spin size="large" />
            ) : items && !isLoading ? (
                items.length > 0 ? (items.map(item => (<Message key={item._id} {...item} />))
                ) : (
                    <Empty description="Нет сообщений" />
                )
            ) : (
                <Empty description="Откройте диалог" />
            )}
        </div>
    )
};

export default connect(
    ({ dialogs, messages }) => ({
        currentDialogId: dialogs.currentDialogId,
        items: messages.items,
        isLoading: messages.isLoading
    }),
    messagesActions
)(Messages);