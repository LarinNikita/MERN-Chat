import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { removeMessageById } from '../../redux/slices/messages'

import { Time, Readed, AvatarUser } from '../'

import wave from '../../assets/icons/wave.svg'
import { Button, Popover } from 'antd'
import {
    CaretUpOutlined,
    CopyOutlined,
    DeleteOutlined,
    PauseOutlined
} from '@ant-design/icons'

import { convertCurrentTime } from '../../utils/helpers'
import reactStringReplace from 'react-string-replace';
import data from '@emoji-mart/data'
import { init } from 'emoji-mart'


import './Message.scss'

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


const MessageAudio = ({ audioSrc }) => {
    const [isPlay, setIsPlay] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState(0);
    const audioRef = React.useRef(null);

    React.useEffect(() => {
        audioRef.current.addEventListener('playing', () => {
            setIsPlay(true);
        }, false);
        audioRef.current.addEventListener('ended', () => {
            setIsPlay(false);
            setProgress(0);
            setCurrentTime(0);
        }, false);
        audioRef.current.addEventListener('pause', () => {
            setIsPlay(false);
        }, false);
        audioRef.current.addEventListener('timeupdate', () => {
            const duration = audioRef.current && audioRef.current.duration || 0;
            setCurrentTime(audioRef.current.currentTime);
            setProgress((audioRef.current.currentTime / duration) * 100);
        }, false);
    }, []);

    const togglePlay = () => {
        if (!isPlay) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    return (
        <div className='message__audio'>
            <audio ref={audioRef} src={audioSrc} preload="auto" />
            <div className="message__audio-progress" style={{ width: progress + '%' }}></div>
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <Button
                        type="primary"
                        shape="circle"
                        icon={isPlay
                            ? <PauseOutlined style={{ fontSize: 18, marginTop: 1 }} />
                            : <CaretUpOutlined rotate={90} style={{ fontSize: 18, marginLeft: 2 }} />
                        }
                        onClick={togglePlay}
                    />
                </div>
                <div className="message__audio-wave">
                    {[...Array(7)].map((_, index) => <img key={index} src={wave} alt="audio wave" />)}
                </div>
                <span className="message__audio-duration">
                    {convertCurrentTime(currentTime)}
                </span>
            </div>
        </div>
    )
}

const Message = ({
    _id,
    avatar,
    user,
    text,
    date,
    createdAt,
    isMe,
    isReaded,
    attachments,
    isTyping,
    audio
}) => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.data);
    const [visible, setVisible] = useState(false);

    init({ data })


    const handleContextMenu = (event) => {
        event.preventDefault();
        setVisible(true);
    };

    const deleteMessage = () => {
        if (window.confirm('Вы действительно хотите удалить сообщение?')) {
            dispatch(removeMessageById(_id));
        }
        setVisible(false);
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        setVisible(false);
    };

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
                <AvatarUser user={user} size={42} />
                {/* <img src={avatar} alt={`Avatar ${user.fullName}`} /> */}
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
                    <Popover
                        open={visible}
                        arrow={false}
                        placement="right"
                        content={
                            <div>
                                {userData._id === user._id ? (
                                    <Button
                                        icon={<DeleteOutlined />}
                                        type="text"
                                        size='small'
                                        block
                                        onClick={deleteMessage}
                                    >
                                        Удалить
                                    </Button>
                                ) : (null)
                                }

                                <Button
                                    icon={<CopyOutlined />}
                                    type="text"
                                    size='small'
                                    block
                                    onClick={handleCopyText}
                                >
                                    Копировать текст
                                </Button>
                            </div>
                        }
                        trigger="contextMenu"
                        onOpenChange={(value) => setVisible(value)}
                    >
                        <div className="message__bubble" onContextMenu={handleContextMenu}>
                            {text &&
                                <p className='message__text'>
                                    {reactStringReplace(text, /:(.+?):/g, (match, i) => (
                                        <em-emoji key={i} shortcodes={`:${match}:`}></em-emoji>
                                    ))}

                                </p>}
                            {isTyping &&
                                <div className="message__typing">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            }
                            {audio &&
                                <MessageAudio audioSrc={audio} />
                            }

                        </div>
                    </Popover>
                }
                {createdAt && <span className="message__date">
                    <Time date={new Date(createdAt)} />
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