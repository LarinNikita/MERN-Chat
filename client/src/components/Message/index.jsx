import React from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'
import classNames from 'classnames'
import doubleChecked from '../../assets/icons/bx-check-double.svg'
import checked from '../../assets/icons/bx-check.svg'

import './Message.scss'

const Message = ({ avatar, user, text, date, isMe, isReaded }) => {
    return (
        <div className={classNames('message', { 'message--isme': isMe })}>
            
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullName}`} />
            </div>

            <div className="message__content">
                <div className="message__bubble">
                    <p className='message__text'>{text}</p>
                </div>
                <span className="message__date">
                    {formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}
                </span>
            </div>

            {isMe ? (
                <div className='message__check'>
                    {isReaded ? (
                        <img src={doubleChecked} alt="Double checked icon" />
                    ) : (
                        <img src={checked} alt="Checked icon" />
                    )}
                </div>
            ) : null}

        </div>
    )
}

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    user: PropTypes.object,
    text: PropTypes.string,
    date: PropTypes.instanceOf(Date)
}

export default Message