import React from 'react'
import { Box, Button } from '../../../components'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input } from 'antd'
import { Link } from 'react-router-dom'

const LoginForm = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Box>
                <Form
                    name="normal_login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                        hasFeedback
                        validateStatus="success"
                    >
                        <Input
                            size="large"
                            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
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
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" size='large'>
                            Войти в аккаунт
                        </Button>
                    </Form.Item>
                    <Link className="auth__register--link" to="/register">
                        Зарегистрироваться
                    </Link>
                </Form>
            </Box>
        </div>
    )
}

export default LoginForm
