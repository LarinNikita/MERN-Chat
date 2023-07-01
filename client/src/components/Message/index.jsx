import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Message.scss'
import { Time, Readed } from '../'

// import WaveSurfer from 'https://unpkg.com/wavesurfer.js@beta'

// const wavesurfer = WaveSurfer.create({
//   container: '#waveform',
//   waveColor: '#4F4A85',
//   progressColor: '#383351',
//   url: 'https://www.myinstants.com/media/sounds/y2mate_HOnnyD0.mp3',
// })

// wavesurfer.on('interaction', () => {
//   wavesurfer.play()
// })

const Message = ({
    avatar,
    user,
    text,
    date,
    isMe,
    isReaded,
    attachments,
    isTyping,
    audio
}) => {
    return (
        <div
            className={classNames('message', {
                'message--isme': isMe,
                'message--is-typing': isTyping,
                'message--image': attachments && attachments.length === 1,
                'message--is-audio': audio,
            })}
        >

            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullName}`} />
            </div>

            <div className="message__content">
                {attachments &&
                    <div className="message__attachments">
                        {attachments.map((item, index) => (
                            <div className="message__attachments-item" key={index}>
                                <img src={item.url} alt={item.filename} />
                            </div>
                        ))}
                    </div>
                }
                {(text || isTyping || audio) &&
                    <div className="message__bubble">
                        {text && <p className='message__text'>{text}</p>}
                        {isTyping &&
                            <div className="message__typing">
                                <span />
                                <span />
                                <span />
                            </div>
                        }
                        {
                            audio &&
                            <div className='message__audio'>
                                <div className="message__audio-progress" style={{width: '60%'}}></div>
                                <div className="message__audio-info">
                                    <div className="message__audio-btn">
                                        <button>||</button>
                                    </div>
                                    <div className="message__audio-wave">
                                        <img src="" alt="audio wave" />
                                    </div>
                                    <span className="message__audio-duration">
                                        00:19
                                    </span>
                                </div>
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
    isTyping: PropTypes.bool,
    audio: PropTypes.string
}

export default Message