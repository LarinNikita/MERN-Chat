import React from 'react'
import orderBy from 'lodash/orderBy'
import isToday from 'date-fns/isToday'
import { DialogItem } from '../'

import './Dialogs.scss'

const Dialogs = ({ items, userId }) => {
    return (
        <div className='dialogs'>
            {orderBy(items, ["created_at"], ["desc"]).map((item, index) => (
                <DialogItem
                    key={item._id}
                    user={item.user}
                    message={item}
                    unread={item.unread}
                    isMe={item.user._id === userId}
                />
            ))}
        </div>
    )
}

export default Dialogs