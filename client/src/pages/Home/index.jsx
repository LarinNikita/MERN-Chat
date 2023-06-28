import React from 'react'

import { Message } from '../../components'

import './Home.scss'

const Home = () => {
    const date = new Date();
    return (
        <section className='home'>
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
            />
        </section>
    )
}

export default Home