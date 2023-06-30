import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Avatar, Badge, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { Time, Readed } from '../'

import './DialogItem.scss'

const { Text } = Typography;

const DialogItem = ({ user, message, unread }) => {
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
                        src='https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                        icon={<UserOutlined />}
                    />
                </Badge>
            </div>
            <div className="dialog__item-info">
                <div className='dialog__item-info-top'>
                    <Text strong >
                        Зубенко Михаил Петрович
                    </Text>
                    <Text type="secondary">
                        {/* <Time date={new Date()} /> */}
                        17:19
                    </Text>
                </div>
                <div className='dialog__item-info-bottom'>
                    <Text type="secondary">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi doloribus aspernatur corporis qui quisquam, recusandae quod dicta! Fugit, amet iusto?
                    </Text>
                    {(unread > 0)
                        ? (<Badge color='#fd7967' style={{ fontSize: 12 }} count={unread} />)
                        : (<Readed isMe={true} isReaded={true} />)
                    }

                </div>
            </div>
        </div>
    )
}

DialogItem.propTypes = {
    className: PropTypes.string
}

export default DialogItem