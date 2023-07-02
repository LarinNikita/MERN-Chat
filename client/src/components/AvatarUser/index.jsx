import { Avatar } from 'antd'
import React from 'react'
import { generateAvatar } from '../../utils/helpers'

const AvatarUser = ({ user }) => {

    if (user.avatar) {
        return (
            <Avatar
                size={42}
                src={user.avatar}
            />
        )
    } else {
        const { color, colorLight } = generateAvatar(user._id);
        const firstCharName = user.fullname.charAt(0).toUpperCase();;
        return (
            <Avatar
                size={42}
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