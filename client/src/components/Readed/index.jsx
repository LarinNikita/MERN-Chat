import React from 'react'
import PropTypes from 'prop-types'

import doubleChecked from '../../assets/icons/bx-check-double.svg'
import checked from '../../assets/icons/bx-check.svg'

const Readed = ({ isMe, isReaded }) => {
    return (
        isMe ? (
            isReaded ? (
                <img src={doubleChecked} alt="Double checked icon" />
            ) : (
                <img src={checked} alt="Checked icon" />
            )
        ) : null
    )
}

Readed.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
}

export default Readed