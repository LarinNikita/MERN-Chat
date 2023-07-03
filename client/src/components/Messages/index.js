import React, { useEffect } from 'react';
import { Empty, Spin } from 'antd';
import { Message } from '../'
import { connect } from 'react-redux';
import { messagesActions } from '../../redux/actions';

const Messages = ({ isLoading, currentDialogId, fetchMessages, items }) => {

    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId);
        }
    }, [currentDialogId]);

    return (
        <div>
            {isLoading ? (
                <Spin size="large" />
            ) : items && !isLoading ? (
                items.map(item => (<Message {...item} />))
            ) : (
                <Empty description="Начните диалог" />
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