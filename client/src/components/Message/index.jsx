import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Message.scss'
import { Time, Readed } from '../'

const Message = ({
    avatar,
    user,
    text,
    date,
    isMe,
    isReaded,
    attachments,
    isTyping
}) => {
    return (
        <div
            className={classNames('message', {
                'message--isme': isMe,
                'message--is-typing': isTyping,
                'message--image': attachments && attachments.length === 1,
            })}
        >

            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullName}`} />
            </div>

            <div className="message__content">
                <div className="message__attachments">
                    {attachments &&
                        attachments.map((item, index) => (
                            <div className="message__attachments-item" key={index}>
                                <img src={item.url} alt={item.filename} />
                            </div>
                        ))
                    }
                </div>
                {(text || isTyping) &&
                    <div className="message__bubble">
                        {text && <p className='message__text'>{text}</p>}
                        {isTyping &&
                            <div className="message__typing">
                                <span />
                                <span />
                                <span />
                            </div>
                        }
                    </div>
                }
                {date && <span className="message__date">
                    <Time date={date} />
                </span>}
            </div>

            <div className='message__check'>
                <Readed isMe={isMe} isReaded={isReaded} />
            </div>

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
    date: PropTypes.instanceOf(Date),
    attachments: PropTypes.array,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    isTyping: PropTypes.bool
}

export default Message