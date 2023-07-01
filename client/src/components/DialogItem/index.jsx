import React from 'react'

import { Avatar, Badge, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { Time, Readed } from '../'

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

const DialogItem = ({ user, created_at, text, unread, isMe }) => {
    return (
        <div className='dialog__item'>
            <div className='dialog__item-avatar'>
                <Badge
                    color='green'
                    style={{ padding: 5, border: '2.3px solid #fff' }}
                    offset={[-7, 37]}
                    dot={user.online}
                >
                    <Avatar
                        size={42}
                        src={user.avatar}
                        icon={<UserOutlined />}
                    />
                </Badge>
            </div>
            <div className="dialog__item-info">
                <div className='dialog__item-info-top'>
                    <Text strong >
                        {user.fullname}
                    </Text>
                    <Text type="secondary">
                        {/* <Time date={message.created_at} /> */}
                        {getMessageTime(created_at)}
                    </Text>
                </div>
                <div className='dialog__item-info-bottom'>
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