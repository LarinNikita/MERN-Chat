import React from 'react'
import classNames from 'classnames'

import './Box.scss'

const Box = ({ children, className }) => {
    return (
        <div className={classNames('box', className)}>
            {children}
        </div>
    )
}

export default Box