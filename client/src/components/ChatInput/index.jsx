import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessages } from '../../redux/slices/messages'

import { SmileOutlined, PaperClipOutlined, AudioOutlined, SendOutlined, DownloadOutlined } from '@ant-design/icons'
import { Button, Input, Upload, Modal, Empty } from 'antd'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import ru from '@emoji-mart/data/i18n/ru.json';

import Textarea from '../TextArea'
import './ChatInput.scss'

const ChatInput = () => {
    const dispatch = useDispatch();
    const selectedDialogId = useSelector((state) => state.dialogs.currentDialogId);

    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);
    const [visibleEmoji, setVisibleEmoji] = useState(false);
    const [fileList, setFileList] = useState([]);

    const onSendMessage = (selectedDialogId, value) => {
        dispatch(sendMessages({ dialog: selectedDialogId, text: value }))
    };

    const handleSendMessage = (e) => {
        if (((e.key === 'Enter' && !e.shiftKey) || e.button === 0) && value.trim() !== '') {
            onSendMessage(selectedDialogId, value);
            setValue('');
        }
    };

    const handleUpload = () => {
        // Здесь можно добавить логику для загрузки файлов на сервер
        // Например, использовать fetch или axios для отправки файлов на сервер
        console.log('Загрузка файлов:', fileList);
        // После успешной загрузки файлов можно сбросить список файлов
        setFileList([]);
        // message.success('Файлы успешно загружены!');
        setVisible(false);
    };

    const handleCancel = () => {
        // При отмене загрузки файлов можно сбросить список файлов
        setVisible(false);
        setFileList([]);
    };

    const handleFileChange = (info) => {
        let fileList = [...info.fileList];

        // Ограничение на количество загружаемых файлов
        fileList = fileList.slice(-5);

        // Обновление списка файлов
        fileList = fileList.map((file) => {
            if (file.response) {
                // Обработка ответа от сервера после загрузки файла
                file.url = file.response.url;
            }
            return file;
        });

        setFileList(fileList);
    };

    const toggleEmoji = () => {
        setVisibleEmoji(!visibleEmoji);
    };

    const addEmoji = ({ shortcodes }) => {
        setValue((value + '' + shortcodes).trim());
    };

    return (
        <div className='send'>
            {visibleEmoji &&
                <div className='send__emoji'>
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
                        <Button type="link" onClick={() => setVisible(true)} icon={<PaperClipOutlined />} />
                        <Modal
                            title="Загрузка файлов"
                            open={visible}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="cancel" onClick={handleCancel}>
                                    Отмена
                                </Button>,
                                <Button key="upload" type="primary" onClick={handleUpload} disabled={fileList.length === 0}>
                                    Загрузить
                                </Button>,
                            ]}
                        >
                            <Upload
                                beforeUpload={() => false} // Отключение отправки файлов на сервер
                                multiple
                                onChange={handleFileChange}
                                fileList={fileList}
                                listType='picture'
                            >
                                <Button type="dashed" icon={<DownloadOutlined />}>Выберите файлы</Button>
                            </Upload>
                            {fileList.length === 0 ? (
                                <Empty description="Нет файлов" />
                            ) : (null)}
                        </Modal>
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