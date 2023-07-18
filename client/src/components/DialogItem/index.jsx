import React from 'react'
import classNames from 'classnames'
import { Badge, Typography } from 'antd'
import { Readed, AvatarUser } from '../'

import format from 'date-fns/format'
import isToday from 'date-fns/isToday'

import { useDispatch, useSelector } from 'react-redux'
import { setCurrentDialogId } from '../../redux/slices/dialogs'

import './DialogItem.scss'

const { Text } = Typography;

const getMessageTime = createdAt => {
    if (isToday(createdAt)) {
        return format(
            createdAt, 'HH:mm'
        )
    } else {
        return format(
            createdAt, 'dd.MM.yyyy'
        )
    }
};

const DialogItem = ({ _id, recipient, createdAt, lastMessages, unread, isMe }) => {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(setCurrentDialogId(_id))
    }
    
    const selectedDialogId = useSelector((state) => state.dialogs.currentDialogId);

    return (
        <div
            className={classNames('dialogs__item',
                { "dialogs__item--selected": selectedDialogId === _id }
            )}
            onClick={handleClick}
        >
            <div className='dialogs__item-avatar'>
                <Badge
                    color='green'
                    style={{ padding: 5, border: '2.3px solid #fff' }}
                    offset={[-7, 37]}
                dot={lastMessages.user.isOnline}
                >
                    <AvatarUser user={recipient} />
                </Badge>
            </div>
            <div className="dialogs__item-info">
                <div className='dialogs__item-info-top'>
                    <Text strong >
                        {recipient.fullname}
                    </Text>
                    <Text type="secondary">
                        {getMessageTime(new Date(lastMessages.createdAt))}
                    </Text>
                </div>
                <div className='dialogs__item-info-bottom'>
                    <Text type="secondary">
                        {lastMessages?.text}
                    </Text>
                    {(unread > 0)
                        ? (<Badge color='#fd7967' style={{ fontSize: 12 }} count={unread} />)
                        : (isMe && <Readed isMe={isMe} isReaded={true} />)
                    }

                </div>
            </div>
        </div>
    )
}

export default DialogItem