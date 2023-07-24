import React from 'react'
import { Input } from 'antd'

import './TextArea.scss'

const { TextArea } = Input

const Textarea = ({ prefix, suffix, ...props }) => {
    return (
        <div className='textarea'>
            {prefix && <div className='textarea__prefix'>{prefix}</div>}
            <TextArea {...props} />
            {suffix && <div className='textarea__suffix'>{suffix}</div>}
        </div>
    )
}

export default Textarea