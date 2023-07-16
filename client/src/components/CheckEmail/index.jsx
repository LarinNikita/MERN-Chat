import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchVerify } from '../../redux/slices/user';

import { Result, Typography } from 'antd'
import { Box, Button } from '..'

const { Title, Text } = Typography;

const TextInfo = (hash, verified) => {
    if (hash) {
        if (verified) {
            return {
                status: 'success'
            }
        } else {
            return {
                status: 'error',
                message: 'Ошибка при подтверждение аккаунта.'
            }
        }
    } else {
        return {
            status: 'info',
            message: 'На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.'
        }
    }
}

const CheckEmail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const hash = location.search.split('hash=')[1];

    const [verified, setVerified] = useState(false);

    const textInfo = TextInfo(hash, verified)

    useEffect(() => {
        if (hash) {
            dispatch(fetchVerify(hash)).then((data) => {
                if (data.payload) {
                    if (data.payload.status === 'success') {
                        setVerified(true)
                    }
                }
            });
        }
    }, [])

    return (
        <section className='auth'>
            <Box className='w500'>
                <Result
                    status={textInfo.status}
                    title={
                        <Title level={3}>
                            {textInfo.status === 'success'
                                ? 'Аккаунте успешно подтвержден!'
                                : 'Подтвердите свой аккаунт!'
                            }
                        </Title>
                    }
                    subTitle={
                        <Text type='secondary' style={{ fontSize: 20 }}>
                            {textInfo.message}
                        </Text>
                    }
                    extra={textInfo.status === 'success' && verified
                        ? <Button type="primary" size='large' onClick={() => navigate('/login')}>
                            Понятно
                        </Button> : null
                    }
                />
            </Box>
        </section>
    )
}

export default CheckEmail