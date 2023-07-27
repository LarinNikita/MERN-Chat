import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessages } from '../../redux/slices/messages'

import { SmileOutlined, PaperClipOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import ru from '@emoji-mart/data/i18n/ru.json';

import { useClickOutside } from "../../utils/helpers"

import Textarea from '../TextArea'
import './ChatInput.scss'
import UploadModal from '../Upload'

const ChatInput = () => {
    const dispatch = useDispatch();
    const selectedDialogId = useSelector((state) => state.dialogs.currentDialogId);

    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);
    const [visibleEmoji, setVisibleEmoji] = useState(false);

    const onSendMessage = (selectedDialogId, value) => {
        dispatch(sendMessages({ dialog: selectedDialogId, text: value }))
    };

    const handleSendMessage = (e) => {
        if (((e.key === 'Enter' && !e.shiftKey) || e.button === 0) && value.trim() !== '') {
            onSendMessage(selectedDialogId, value);
            setValue('');
        }
    };

    const toggleEmoji = () => {
        setVisibleEmoji(!visibleEmoji);
    };

    const addEmoji = ({ shortcodes }) => {
        setValue((value + '' + shortcodes).trim());
    };

    const pickerRef = useClickOutside(() => {
        setVisibleEmoji(false);
    });

    return (
        <div className='send'>
            {visibleEmoji &&
                <div className='send__emoji' ref={pickerRef}>
                    <Picker
                        data={data}
                        i18n={ru}
                        theme="light"
                        navPosition="bottom"
                        previewPosition="none"
                        skinTonePosition="none"
                        onEmojiSelect={(emojiTag) => addEmoji(emojiTag)}
                    />
                </div>
            }
            <Textarea
                size='large'
                autoSize={{ maxRows: 8 }}
                prefix={
                    <Button
                        onClick={toggleEmoji}
                        type="link"
                        icon={<SmileOutlined />}
                    />
                }
                placeholder='Введите текст сообщения...'
                onChange={(e) => setValue(e.target.value)}
                value={value}
                onKeyUp={handleSendMessage}
                suffix={
                    <>
                        <UploadModal
                            button={
                                <Button type='link' icon={<PaperClipOutlined />} />
                            }
                            input={
                                <Input placeholder='Подпись'/>
                            }
                        />
                        {value
                            ? <Button type="link" shape="circle" icon={<SendOutlined />} onClick={handleSendMessage} />
                            : <Button type="link" shape="circle" icon={<AudioOutlined />} />
                        }
                    </>
                }
            />
        </div>
    )
}

export default ChatInput