import React from 'react'

import { Badge, Typography } from 'antd'
import { Readed, AvatarUser } from '../'

import format from 'date-fns/format'
import isToday from 'date-fns/isToday'

import './DialogItem.scss'

const { Text } = Typography;

const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(
            created_at, 'HH:mm'
        )
    } else {
        return format(
            created_at, 'dd.MM.yyyy'
        )
    }
};


const DialogItem = ({ _id, user, created_at, text, unread, isMe, onSelect }) => {
    return (
        <div className='dialogs__item' onClick={onSelect.bind(this, _id)}>
            <div className='dialogs__item-avatar'>
                <Badge
                    color='green'
                    style={{ padding: 5, border: '2.3px solid #fff' }}
                    offset={[-7, 37]}
                    dot={user.online}
                >
                    <AvatarUser user={user} />
                </Badge>
            </div>
            <div className="dialogs__item-info">
                <div className='dialogs__item-info-top'>
                    <Text strong >
                        {user.fullname}
                    </Text>
                    <Text type="secondary">
                        {/* <Time date={message.created_at} /> */}
                        {/* {getMessageTime(created_at)} */}
                        {new Date(created_at).toLocaleString()}
                    </Text>
                </div>
                <div className='dialogs__item-info-bottom'>
                    <Text type="secondary">
                        {text}
                    </Text>
                    {(unread > 0)
                        ? (<Badge color='#fd7967' style={{ fontSize: 12 }} count={unread} />)
                        : (isMe && <Readed isMe={true} isReaded={true} />)
                    }

                </div>
            </div>
        </div>
    )
}

export default DialogItem