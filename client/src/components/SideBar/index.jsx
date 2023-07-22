import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout, searchUsers } from '../../redux/slices/user';
import { createDialog, fetchDialogs } from '../../redux/slices/dialogs';
import {
    Layout,
    Button,
    Typography,
    Modal,
    Select,
    Input,
    Form
} from 'antd'
import {
    FormOutlined,
    TeamOutlined,
    LogoutOutlined,
    ArrowRightOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';

import { Dialogs } from '../'

const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const SideBar = ({ items, isLoading }) => {
    const dispatch = useDispatch();
    const naviguate = useNavigate();
    const [collapsed, setCollapsed] = useState();
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(false);
    const [users, setUsers] = useState([]);
    const [messageText, setMessageText] = useState('');

    const onClickLogout = () => {
        if (window.confirm('Вы действительно хотите выйти?')) {
            dispatch(logout());
            window.localStorage.removeItem('token');
            naviguate('/login');
        }
    };

    useEffect(() => {
        if (visible) {
            dispatch(searchUsers('')).then(({ payload }) => {
                setUsers(payload);
            });
        }
    }, [visible]);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleOk = () => {
        dispatch(createDialog({
            recipient: selectedUserId,
            text: messageText
        }));
        setVisible(false);
        setMessageText('');
    }

    const onChange = (value) => {
        setSelectedUserId(value);
    };

    const onSearch = (value) => {
        setConfirmLoading(true);
        dispatch(searchUsers(value)).then(({ payload }) => {
            setUsers(payload);
            setConfirmLoading(false);
        });
    };

    const options = users.map((user) => (
        <Option key={user._id}>{user.fullname}</Option>
    ));

    const onChangeTextArea = (e) => {
        setMessageText(e.target.value)
    };

    return (
        <Sider
            className='sidebar'
            width={320}
            trigger={
                <Button
                    type="text"
                    icon={collapsed
                        ? <ArrowRightOutlined />
                        : <ArrowLeftOutlined />
                    }
                />
            }
            breakpoint="md"
            collapsedWidth="0"
            onCollapse={() => {
                setCollapsed(!collapsed)
            }}
        >
            <Header className='sidebar__header'>
                <Button
                    className='sidebar__header--btn'
                    type="link"
                    shape="circle"
                    size="small"
                    icon={<LogoutOutlined />}
                    onClick={onClickLogout}
                />
                <Title className='sidebar__header--title' level={5}>
                    <TeamOutlined />
                    Список диалогов
                </Title>
                <Button
                    className='sidebar__header--btn'
                    type="link"
                    shape="circle"
                    size="small"
                    icon={<FormOutlined />}
                    onClick={showModal}
                />
                <Modal
                    title="Начать диалог"
                    open={visible}
                    onCancel={handleCancel}
                    bodyStyle={{ height: 200 }}
                    footer={[
                        <Button key='back' onClick={handleCancel}>
                            Отмена
                        </Button>,
                        <Button
                            key='submit'
                            type='primary'
                            onClick={handleOk}
                            loading={confirmLoading}
                            disabled={!selectedUserId || !messageText}
                        >
                            Создать
                        </Button>
                    ]}
                >
                    <Form layout="vertical">
                        <Form.Item label="Введи имя или E-Mail пользователя">
                            <Select
                                showSearch
                                placeholder='Поиск'
                                style={{ width: '100%' }}
                                onChange={onChange}
                                onSearch={onSearch}
                                showArrow={false}
                                autoClearSearchValue={true}
                            >
                                {options}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <TextArea
                                placeholder="Введите текст сообщения..."
                                autoSize={{ minRows: 3, maxRows: 7 }}
                                onChange={onChangeTextArea}
                                value={messageText}
                            />
                        </Form.Item>
                    </Form>
                </Modal>
            </Header>
            <Content className='sidebar__content'>
                <Dialogs
                    items={items}
                    isLoading={isLoading}
                />
            </Content>
        </Sider>
    )
}

export default SideBar