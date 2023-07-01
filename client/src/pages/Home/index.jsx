import React from 'react'

import { Dialogs, Message } from '../../components'

import './Home.scss'

const Home = () => {
    const date = new Date();
    return (
        <section className='home' style={{ padding: '10px' }}>
            <Dialogs
                userId={1}
                items={[
                    {
                        _id: Math.random(),
                        text: "Lorem Lorem Lorem Lorem Lorem Lorem",
                        isReaded: false,
                        created_at: new Date(),
                        user: {
                            _id: 1,
                            fullname: "Иван Иванов",
                            avatar: "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
                            online: true
                        },
                        unread: 0
                    },
                    {
                        _id: Math.random(),
                        text: "Работа с датами очень трудна",
                        isReaded: false,
                        created_at: new Date("2023-06-30"),
                        user: {
                            _id: 1,
                            fullname: "Иван Иванов",
                            avatar: "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
                            online: true
                        },
                        unread: 0
                    },
                    {
                        _id: Math.random(),
                        text: "Автоматическая аватарка",
                        isReaded: false,
                        created_at: new Date(),
                        user: {
                            _id: 1,
                            fullname: "Фёдор Николаевич",
                            avatar: null,
                            online: false
                        },
                        unread: 1
                    },
                ]}
            />

            {/* <Message
                avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                text="Веб-сайт, посвященный фирменной стоковой фотографии. С 2021 года он принадлежит Getty Images."
                date={date}
                isMe={false}
                isReaded={false}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://plus.unsplash.com/premium_photo-1686090450592-aca413579d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://images.unsplash.com/photo-1682688759350-050208b1211c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    },
                ]}
            />
            <Message
                avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                text="Ого! Скинь ссылку."
                date={date}
                isMe={true}
                isReaded={true}
            />
            <Message
                avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                text="Веб-сайт, посвященный фирменной стоковой фотографии. С 2021 года он принадлежит Getty Images."
                date={date}
                isMe={false}
                isReaded={false}
            />
            <Message
                avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                text="Ого! Скинь ссылку."
                date={date}
                isMe={true}
                isReaded={false}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://plus.unsplash.com/premium_photo-1686090450592-aca413579d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://images.unsplash.com/photo-1682688759350-050208b1211c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    },
                ]}
            />
            <Message
                avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                isMe={false}
                isReaded={false}
                isTyping
            />
            <Message
                avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                date={date}
                isMe={false}
                isReaded={false}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
                    },
                ]}
            /> */}
        </section>
    )
}

export default Home