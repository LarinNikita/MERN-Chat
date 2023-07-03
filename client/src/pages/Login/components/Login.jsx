import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from 'antd'
import {
    MailOutlined,
    LockOutlined,
    UserOutlined,
    EyeTwoTone,
    EyeInvisibleOutlined
} from '@ant-design/icons'
import { Box, Button } from '../../../components'
import { validateFields } from '../../../utils/helpers'

import '../../../styles/auth.scss'

const Login = props => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <section className='auth'>
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <Box>
                    <Form onSubmit={handleSubmit}>
                        {/* <Form.Item
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
                        </Form.Item> */}
                        <Form.Item
                            validateStatus={validateFields("email", touched, errors)}
                            help={!touched.email ? "" : errors.email}
                            hasFeedback
                        >
                            <Input
                                id="email"
                                size="large"
                                prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="E-Mail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </Form.Item>
                        <Form.Item
                             validateStatus={validateFields("password", touched, errors)}
                             help={!touched.password ? "" : errors.password}
                            hasFeedback
                        >
                            <Input.Password
                                id="password"
                                size="large"
                                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                iconRender={(visible) => (visible
                                    ? <EyeTwoTone style={{ color: 'rgba(0,0,0,.25)' }} />
                                    : <EyeInvisibleOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
                                )}
                                placeholder="Пароль"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={handleSubmit} type="primary" size='large'>
                                Войти в аккаунт
                            </Button>
                        </Form.Item>
                        <Link className="auth__register--link" to="/register">
                            Зарегистрироваться
                        </Link>
                    </Form>
                </Box>
            </div>
        </section>
    )
}

export default Login
