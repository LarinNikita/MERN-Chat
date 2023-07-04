import React, { useState } from 'react'

import { SmileOutlined, PaperClipOutlined, AudioOutlined, SendOutlined, DownloadOutlined } from '@ant-design/icons'
import { Button, Input, Upload, Modal, List, Empty } from 'antd'

import './ChatInput.scss'

const ChatInput = () => {

    const [value, setValuue] = React.useState('');

    const [visible, setVisible] = useState(false);
    const [fileList, setFileList] = useState([]);

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
        setFileList([]);
        setVisible(false);
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

    return (
        <div className='send'>
            <Input
                size='large'
                prefix={
                    <Button type="link" shape="circle" icon={<SmileOutlined />} />
                }
                placeholder='Введите текст сообщения...'
                onChange={(e) => setValuue(e.target.value)}
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
                            ? <Button type="link" shape="circle" icon={<SendOutlined />} />
                            : <Button type="link" shape="circle" icon={<AudioOutlined />} />
                        }
                    </>
                }
                style={{
                    borderRadius: 0,
                    border: 'none',
                    borderTop: '1px solid #f7f7f7',
                    boxShadow: 'none'
                }}
            />
        </div>
    )
}

export default ChatInput