import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchRegister } from '../../../redux/slices/user'
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
import { notification, validateFields } from '../../../utils/helpers'

import '../../../styles/auth.scss'

const Registration = props => {
    const dispatch = useDispatch();

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    const handleFormSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values));

        if (data.payload) {
            notification({
                title: 'Поздравляю',
                text: 'Ргистрация прошла успешно',
                type: 'success'
            });
            if ('token' in data.payload) {
                window.localStorage.setItem('token', data.payload.token);
            }
            handleSubmit(values);
        } else {
            notification({
                title: 'Ошибка регистрации',
                text: 'Некорректные данные',
                type: 'error'
            });
        }
    }

    return (
        <section className="auth">
            <div className="auth__content">
                {
                    <>
                        <div className="auth__top">
                            <h2>Регистрация</h2>
                            <p>Для входа в чат, вам нужно зарегистрироваться</p>
                        </div>
                        <Box>
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
                                <Form.Item
                                    validateStatus={validateFields("fullname", touched, errors)}
                                    help={!touched.fullname ? "" : errors.fullname}
                                    hasFeedback
                                >
                                    <Input
                                        id="fullname"
                                        size="large"
                                        prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Ваше имя"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.fullname}
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
                                <Form.Item
                                    validateStatus={validateFields("password_confirm", touched, errors)}
                                    help={!touched.password_confirm ? "" : errors.password_confirm}
                                    hasFeedback
                                >
                                    <Input.Password
                                        id="password_confirm"
                                        size="large"
                                        prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        iconRender={(visible) => (visible
                                            ? <EyeTwoTone style={{ color: 'rgba(0,0,0,.25)' }} />
                                            : <EyeInvisibleOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
                                        )}
                                        placeholder="Повторите пароль"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password_confirm}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        onClick={() => handleFormSubmit(values)}
                                        type="primary"
                                        size='large'
                                    >
                                        Зарегистрироваться
                                    </Button>
                                </Form.Item>
                                <Link className="auth__register--link" to="/login">
                                    Войти в аккаунт
                                </Link>
                            </Form>
                        </Box>
                    </>
                }
            </div>
        </section >
    )
}

export default Registration
