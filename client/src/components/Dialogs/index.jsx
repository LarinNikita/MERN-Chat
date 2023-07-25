import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewDialog, fetchDialogs, updateDialog } from '../../redux/slices/dialogs';
import { filter, orderBy } from 'lodash';

import { socket } from '../../core'

import { Input, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { DialogItem } from '../';

import './Dialogs.scss';

const Dialogs = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.data);
    const [searchValue, setSearchValue] = useState('');

    const { dialogs } = useSelector((state) => state.dialogs);
    const isLoading = dialogs.status === 'loading';

    const onNewDialog = () => {
        dispatch(fetchDialogs());
    }
    const onNewMessage = (data) => {
        dispatch(updateDialog(data));
    }

    useEffect(() => {
        dispatch(fetchDialogs());

        socket.on('SERVER:DIALOG_CREATED', onNewDialog);
        socket.on('SERVER:MESSAGE_CREATED', onNewMessage);
        return () => {
            socket.removeListener('SERVER:DIALOG_CREATED', onNewDialog);
            socket.removeListener('SERVER:MESSAGE_CREATED', onNewMessage);
        }
    }, [dispatch]);


    const filteredItems = filter(dialogs.data, (item) =>
        item.sender.fullname.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.recipient.fullname.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className='dialogs'>
            <Input
                className='dialogs__search'
                placeholder='Поиск среди контактов'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                suffix={<SearchOutlined />}
            />

            <div className='dialogs__content'>
                {isLoading
                    ? (
                        <Empty description="Загрузка..." />
                    ) : (
                        filteredItems.length ? (
                            orderBy(filteredItems, ['updatedAt'], ['desc'])
                                .map(item => (
                                    <DialogItem
                                        key={item._id}
                                        isMe={item.sender._id === userData?._id}
                                        {...item}
                                    />
                                ))
                        ) : (
                            <Empty
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description="Ничего не найдено"
                            />
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Dialogs;