import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import orderBy from 'lodash/orderBy';

import { Input, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { filter } from 'lodash';

import { DialogItem } from '../';

import './Dialogs.scss';

const Dialogs = ({ items, isLoading }) => {
    const userData = useSelector((state) => state.user.data);

    const [searchValue, setSearchValue] = useState('');
    const filteredItems = filter(items, (item) =>
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
                            orderBy(filteredItems, ["created_at"], ["asc"])
                                .map(item => (
                                    <DialogItem
                                        key={item._id}
                                        isMe={item.recipient._id === userData?._id}
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