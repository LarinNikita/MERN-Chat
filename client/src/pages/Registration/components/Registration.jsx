import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from 'antd'
import {
    MailOutlined,
    LockOutlined,
    UserOutlined,
    InfoCircleTwoTone,
    EyeTwoTone,
    EyeInvisibleOutlined
} from '@ant-design/icons'
import { Box, Button } from '../../../components'
import { validateFields } from '../../../utils/helpers'

import '../../../styles/auth.scss'

const success = false;

const Registration = props => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <section className="auth">
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат, вам нужно зарегистрироваться</p>
                </div>
                <Box>
                    {!success ? (
                        <Form onSubmit={handleSubmit}>
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
                            <Form.Item>
                                <Input
                                    size="large"
                                    prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Ваше имя"
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
                                <Input
                                    size="large"
                                    prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Повторите пароль"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button onClick={handleSubmit} type="primary" size='large'>
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
                                <InfoCircleTwoTone style={{ fontSize: '50px', marginBottom: '20px' }} />
                            </div>
                            <h2>Подтвердите свой аккаунт</h2>
                            <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                        </div>
                    )}

                </Box>
            </div>
        </section>
    )
}

export default Registration
