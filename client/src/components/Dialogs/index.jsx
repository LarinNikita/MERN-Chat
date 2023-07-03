import React, { useState } from 'react';
import orderBy from 'lodash/orderBy';
import { DialogItem } from '../';
import { Input, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './Dialogs.scss';

const Dialogs = ({ items, userId }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState(Array.from(items));

    const onChange = value => {
        setFilter(
            items.filter(item => item.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0)
        );
        setSearchQuery(value);
    };

    return (
        <div className='dialogs'>
            <Input
                className='dialogs__search'
                placeholder='Поиск среди контактов'
                value={searchQuery}
                onChange={e => onChange(e.target.value)}
                suffix={<SearchOutlined />}
            />
            <div className='dialogs__content'>
                {filter.length ? (
                    orderBy(filter, ["created_at"], ["asc"])
                        .map(item => (
                            <DialogItem
                                key={item._id}
                                isMe={item.user._id === userId}
                                {...item}
                            />
                        ))
                ) : (
                    <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description="Ничего не найдено"
                    />
                )}
            </div>
        </div>
    );
};

export default Dialogs;