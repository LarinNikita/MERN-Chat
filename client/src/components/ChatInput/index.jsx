import React from 'react'

import { SmileOutlined, PaperClipOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'

import './ChatInput.scss'

const ChatInput = () => {

    const [value, setValuue] = React.useState('');

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
                        <Button type="link" shape="circle" icon={<PaperClipOutlined />} />
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