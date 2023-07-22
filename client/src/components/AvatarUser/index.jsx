import { Avatar } from 'antd'
import React from 'react'
import { generateAvatar } from '../../utils/helpers'

const AvatarUser = ({ user, size }) => {

    if (user.avatar) {
        return (
            <Avatar
                size={size}
                src={user.avatar}
            />
        )
    } else {
        const { color, colorLight } = generateAvatar(user._id);
        const firstCharName = user.fullname.charAt(0).toUpperCase();;
        return (
            <Avatar
                size={size}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    background: `linear-gradient(135deg, ${color} 0%, ${colorLight} 96.52%)`
                }}
                icon={firstCharName}
            />
        )
    }
}

export default AvatarUser