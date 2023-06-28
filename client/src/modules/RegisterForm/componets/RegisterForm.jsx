import React from 'react'
import { Box, Button } from '../../../components'
import { MailOutlined, LockOutlined, UserOutlined, InfoCircleTwoTone } from '@ant-design/icons'
import { Form, Input } from 'antd'
import { Link } from 'react-router-dom'

const RegisterForm = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const success = true;

    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Box>
                {!success ? (
                    <Form
                        name="normal_login"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="mail"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="E-Mail"
                            />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Ваше имя"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Пароль"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Повторите пароль"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size='large'>
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Link className="auth__register--link" to="/login">
                            Войти в аккаунт
                        </Link>
                    </Form>
                ) : (
                    <div className='auth__success-block'>
                        <div>
                            <InfoCircleTwoTone style={{ fontSize: '50px' }} />
                        </div>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                    </div>
                )}

            </Box>
        </div>
    )
}

export default RegisterForm
