import React, { useState } from 'react'
import { Button, Modal, Upload } from 'antd'

const UploadModal = ({ button, input }) => {
    const [visible, setVisible] = useState(false);
    const [fileList, setFileList] = useState([]);
    const handleUpload = () => {
        console.log('Загрузка файлов:', fileList);
        setFileList([]);
        setVisible(false);
    };

    const handleCancel = () => {
        setFileList([]);
        setVisible(false);
    };

    const handleFileChange = (info) => {
        let fileList = [...info.fileList];

        fileList = fileList.map((file) => {
            if (file.response) {
                file.url = file.response.url;
            }
            return file;
        });

        setFileList(fileList);
        setVisible(true);

        if (fileList.length < 1) {
            setFileList([])
            setVisible(false)
        }
    };

    return (
        <>
            <Upload
                multiple
                showUploadList={false}
                onChange={handleFileChange}
                fileList={fileList}
                beforeUpload={() => false}
            >
                {button}
            </Upload>
            <Modal
                centered
                width={490}
                title={
                    fileList.length > 1 
                    ? `Выбранно ${fileList.length} изображени${fileList.length < 5 ? 'я' : 'й'}` 
                    : 'Добавить изображение'
                }
                open={visible}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        Отмена
                    </Button>,
                    <Button key="upload" type="primary" onClick={handleUpload} disabled={fileList.length === 0}>
                        Отправить
                    </Button>
                ]}
            >
                <Upload
                    multiple
                    listType='picture-card'
                    onChange={handleFileChange}
                    fileList={fileList}
                    beforeUpload={() => false}
                >
                    Добавить
                </Upload>
                {input}
            </Modal>
        </>
    )
}

export default UploadModal