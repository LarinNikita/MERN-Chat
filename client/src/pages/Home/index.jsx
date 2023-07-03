import React from 'react'

import { Dialogs, Message, ChatInput, Messages } from '../../components'

import { Layout, Typography, Badge, Button } from 'antd'
import { FormOutlined, TeamOutlined, EllipsisOutlined } from '@ant-design/icons';

import './Home.scss'

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const Home = () => {
    return (

        <Layout className='wrapper'>
            <Sider className='sidebar' width={320} >
                <Header className='sidebar__header'>
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
                    />
                </Header>
                <Content className='sidebar__content'>
                    <Dialogs
                        userId={1}
                        items={[
                            {
                                _id: "64a14dbe82c759f43720a05e",
                                text: "Ipsum nulla irure exercitation sint elit. Duis ipsum laboris tempor pariatur. Eu tempor Lorem amet id dolor excepteur exercitation adipisicing.",
                                created_at: "Sat Feb 07 2004 13:39:52 GMT+0700 (Красноярск, стандартное время)",
                                user: {
                                    _id: "64a14dbe5cb8fb237d0cd1c0",
                                    fullname: "Adkins",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbe759d4c0b0515cc20",
                                text: "Consectetur commodo aliqua ex exercitation non laborum duis aliquip nulla velit qui officia nisi quis. Proident laboris aliquip ex nostrud et. Proident minim incididunt culpa culpa labore eu reprehenderit dolor consectetur proident ea aliqua.",
                                created_at: "Thu May 27 1982 07:31:43 GMT+0800 (Красноярск, летнее время)",
                                user: {
                                    _id: "64a14dbe0d7402d0d9a8aecf",
                                    fullname: "Elsa",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbed5e09fb84c661adc",
                                text: "Esse nisi sit consequat labore pariatur exercitation pariatur. Laboris officia incididunt voluptate exercitation velit. Irure tempor ad velit duis eu.",
                                created_at: "Tue Jul 02 1991 13:44:00 GMT+0700 (Красноярск, летнее время)",
                                user: {
                                    _id: "64a14dbe7fa0c7ea209b57d8",
                                    fullname: "Nadia",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbeb4239bc87ac554b4",
                                text: "Occaecat consequat proident nulla nostrud et laboris cupidatat voluptate culpa. Sint sit qui tempor cupidatat eiusmod minim anim aliquip ad. Do est sint dolore quis velit ea sit do est labore.",
                                created_at: "Sat Oct 16 2004 20:50:29 GMT+0800 (Красноярск, летнее время)",
                                user: {
                                    _id: "64a14dbe1149cbf25f2aaf4a",
                                    fullname: "Estela",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbe7b0b18b9ab03d518",
                                text: "Excepteur ad quis ipsum qui deserunt reprehenderit minim sunt magna labore enim mollit in cillum. Fugiat do duis elit ex ex consequat ut in deserunt. Qui proident occaecat cupidatat ex laborum nostrud consectetur non id ut fugiat.",
                                created_at: "Fri Aug 14 1981 02:56:32 GMT+0800 (Красноярск, летнее время)",
                                user: {
                                    _id: "64a14dbe500b7743653595fb",
                                    fullname: "Pauline",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbe883075f855fb11e5",
                                text: "Id consectetur tempor incididunt aute nisi do pariatur ipsum non veniam laboris esse anim. Ipsum do excepteur anim cupidatat anim incididunt ea esse ad consequat excepteur proident sint veniam. Duis do dolor culpa velit commodo.",
                                created_at: "Fri Jun 04 1976 01:08:39 GMT+0700 (Красноярск, стандартное время)",
                                user: {
                                    _id: "64a14dbe308d073b60bdef14",
                                    fullname: "Lott",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbeddcfeee18c9a4029",
                                text: "Ullamco nisi laborum nulla ea incididunt sit anim fugiat reprehenderit dolor. Dolor proident culpa quis laboris consectetur consectetur id laborum deserunt tempor veniam cillum. Nostrud sunt labore sint aliquip.",
                                created_at: "Sat Mar 12 2011 03:35:18 GMT+0700 (Красноярск, стандартное время)",
                                user: {
                                    _id: "64a14dbe07cb5b20ca747910",
                                    fullname: "Chavez",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbe683fe04575880482",
                                text: "Sit mollit sint ipsum labore anim elit magna esse reprehenderit nostrud reprehenderit. Reprehenderit occaecat eu et amet adipisicing deserunt dolor irure non occaecat enim. Nisi quis sunt do fugiat cupidatat aliqua ullamco.",
                                created_at: "Wed Jun 05 2002 12:57:48 GMT+0800 (Красноярск, летнее время)",
                                user: {
                                    _id: "64a14dbe57efe6eb117a4a7b",
                                    fullname: "Georgette",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbe524c944fc519237f",
                                text: "Minim magna labore ipsum irure aliquip laboris fugiat velit in exercitation anim irure. Cupidatat ad anim dolor aute sunt id magna sint amet eu exercitation ipsum. Occaecat deserunt nisi aute ut est consequat in qui incididunt nulla ex aute eiusmod consectetur.",
                                created_at: "Thu Mar 10 1994 07:57:20 GMT+0700 (Красноярск, стандартное время)",
                                user: {
                                    _id: "64a14dbe43d28a11a3349862",
                                    fullname: "Juanita",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbe0dfec719999e9429",
                                text: "Incididunt adipisicing aliquip irure est non ex laboris sint dolor dolor cillum nisi. Cillum ut aliqua velit dolore exercitation ad ut. Consequat esse nostrud id eiusmod adipisicing et nisi incididunt irure ad ipsum adipisicing reprehenderit tempor.",
                                created_at: "Tue Jun 01 2004 05:12:05 GMT+0800 (Красноярск, летнее время)",
                                user: {
                                    _id: "64a14dbe2fd058a10404eb75",
                                    fullname: "Beatriz",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbed7a77a2705d9168c",
                                text: "Qui sit est minim fugiat ex sit ullamco. In nulla ipsum et ex laborum culpa officia non Lorem magna ad amet. Minim dolore exercitation voluptate esse aliquip velit tempor.",
                                created_at: "Thu Aug 23 1973 06:39:10 GMT+0700 (Красноярск, стандартное время)",
                                user: {
                                    _id: "64a14dbe539654b3e842eb9d",
                                    fullname: "Hampton",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbe77ef3aaabad8dd00",
                                text: "Mollit non voluptate occaecat occaecat ullamco Lorem eu ad nisi. Proident culpa dolore ipsum ad laboris. Esse ad esse nisi dolor quis veniam fugiat in cillum occaecat voluptate ea.",
                                created_at: "Sat Feb 19 1994 23:34:08 GMT+0700 (Красноярск, стандартное время)",
                                user: {
                                    _id: "64a14dbe3299bc046e58a8d5",
                                    fullname: "Blankenship",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbe2d7d96c5bcc3ad56",
                                text: "Velit incididunt consectetur ullamco reprehenderit sit aliqua excepteur sunt minim labore aliqua labore magna sint. Incididunt laborum ea ad et id enim aliquip. Est aute minim tempor culpa adipisicing.",
                                created_at: "Wed Sep 06 2000 10:56:55 GMT+0800 (Красноярск, летнее время)",
                                user: {
                                    _id: "64a14dbe524ff0572cf6c38d",
                                    fullname: "Valarie",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbed2f2147521b1ef71",
                                text: "Esse sint ea aliquip ea ipsum ipsum Lorem quis in exercitation amet. Incididunt qui voluptate do sunt velit cupidatat eiusmod adipisicing sit pariatur Lorem. Quis minim incididunt irure amet do laborum occaecat id est veniam in esse adipisicing qui.",
                                created_at: "Mon May 20 1985 07:33:27 GMT+0800 (Красноярск, летнее время)",
                                user: {
                                    _id: "64a14dbeca7039ae677ba021",
                                    fullname: "Kerr",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbeca755e2b8bff9312",
                                text: "Sint nisi aliqua consectetur mollit sit exercitation Lorem reprehenderit. Nulla consectetur fugiat ipsum aliquip amet qui anim ea. Sunt eiusmod consectetur labore esse eu duis non non amet.",
                                created_at: "Fri Feb 03 1995 14:48:10 GMT+0700 (Красноярск, стандартное время)",
                                user: {
                                    _id: "64a14dbee4f53250dd8bad3a",
                                    fullname: "Manuela",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbe26e9d8f288d23314",
                                text: "Do exercitation proident occaecat minim esse incididunt. Dolore nostrud incididunt pariatur eu consequat elit eiusmod et. Exercitation ipsum ullamco veniam adipisicing cillum ad mollit in.",
                                created_at: "Wed Dec 02 1970 20:54:23 GMT+0700 (Красноярск, стандартное время)",
                                user: {
                                    _id: "64a14dbe7bc56baa9177fec7",
                                    fullname: "Diane",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbe2cb40f699c088761",
                                text: "Eu id quis laborum qui in aliqua duis eu excepteur aliquip ullamco nulla cupidatat. Deserunt ex quis consectetur dolore non. Id in ad cupidatat magna enim.",
                                created_at: "Sat Feb 26 2022 17:17:42 GMT+0700 (Красноярск, стандартное время)",
                                user: {
                                    _id: "64a14dbe7ad1c351e54f0f4d",
                                    fullname: "Abbott",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbe1cf1b60bd5ccf848",
                                text: "Sit reprehenderit velit cillum dolor incididunt nostrud incididunt voluptate fugiat. Minim officia ut dolor irure nostrud incididunt ad labore. Culpa laborum excepteur ullamco proident aliqua laboris nisi in adipisicing laborum ea laboris.",
                                created_at: "Wed Jul 04 1990 23:36:11 GMT+0800 (Красноярск, летнее время)",
                                user: {
                                    _id: "64a14dbe0c902a718ac983c5",
                                    fullname: "Ladonna",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbec2dc0d14b1a2b21b",
                                text: "Amet aute labore anim sunt. Ullamco incididunt qui laboris eu amet ut excepteur nulla consectetur proident ea ad consequat exercitation. Cupidatat quis ipsum commodo sint occaecat deserunt tempor quis nisi aliquip est amet sit excepteur.",
                                created_at: "Sun Aug 08 1971 00:41:05 GMT+0700 (Красноярск, стандартное время)",
                                user: {
                                    _id: "64a14dbe1117402467296e86",
                                    fullname: "Tammie",
                                    avatar: null
                                }
                            },
                            {
                                _id: "64a14dbe877d2b330caa639b",
                                text: "Ex ullamco tempor non incididunt fugiat sit. Sint incididunt dolore amet aliqua consequat magna occaecat veniam velit. Fugiat veniam consequat labore nisi do sint culpa ullamco ad commodo.",
                                created_at: "Wed Jun 29 1994 20:29:07 GMT+0800 (Красноярск, летнее время)",
                                user: {
                                    _id: "64a14dbe58bfb2661eefd4e4",
                                    fullname: "Richard",
                                    avatar: null
                                }
                            }
                        ]}
                    />
                </Content>
            </Sider>
            <Layout className='chat'>
                <Header className='chat__header'>
                    <div />
                    <div className='chat__header--user'>
                        <Text strong >Имя пользователя</Text>
                        <Badge status="success" text={<Text type='secondary'>Онлайн</Text>} />
                        {/* <Badge status="default" text={<Text type='secondary'>Офлайн</Text>} /> */}
                    </div>
                    <Button
                        type="link"
                        shape="circle"
                        icon={<EllipsisOutlined style={{ fontSize: '22px' }} />}
                    />
                </Header>
                <Content className='chat__messages' >
                    <Messages />
                </Content>
                <ChatInput className='chat__input' />
            </Layout>
        </Layout>

        //#region test
        // <section className='home' style={{ padding: '10px' }}>
        //     <Dialogs
        //         userId={1}
        //         items={[
        //             {
        //                 _id: Math.random(),
        //                 text: "Lorem Lorem Lorem Lorem Lorem Lorem",
        //                 isReaded: false,
        //                 created_at: new Date(),
        //                 user: {
        //                     _id: 'c20ad4d76fe97759aa27a0c99baa6710',
        //                     fullname: "Иван Иванов",
        //                     avatar: "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
        //                     online: true
        //                 },
        //                 unread: 0
        //             },
        //             {
        //                 _id: Math.random(),
        //                 text: "Автоматический градиент аватарки",
        //                 isReaded: false,
        //                 created_at: new Date(),
        //                 user: {
        //                     _id: 'e4da3b7fbbce2345d7772b0674a318d5',
        //                     fullname: "Фёдор Николаевич",
        //                     avatar: null,
        //                     online: false
        //                 },
        //                 unread: 1
        //             },
        //         ]}
        //     />

        //     <Message
        //         avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        //         text="Веб-сайт, посвященный фирменной стоковой фотографии. С 2021 года он принадлежит Getty Images."
        //         date={date}
        //         isMe={false}
        //         isReaded={false}
        //         attachments={[
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
        //             },
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://plus.unsplash.com/premium_photo-1686090450592-aca413579d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        //             },
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://images.unsplash.com/photo-1682688759350-050208b1211c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        //             },
        //         ]}
        //     />
        //     <Message
        //         avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        //         text="Ого! Скинь ссылку."
        //         date={date}
        //         isMe={true}
        //         isReaded={true}
        //     />
        //     <Message
        //         avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        //         text="Веб-сайт, посвященный фирменной стоковой фотографии. С 2021 года он принадлежит Getty Images."
        //         date={date}
        //         isMe={false}
        //         isReaded={false}
        //     />
        //     <Message
        //         avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        //         text="Ого! Скинь ссылку."
        //         date={date}
        //         isMe={true}
        //         isReaded={false}
        //         attachments={[
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
        //             },
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://plus.unsplash.com/premium_photo-1686090450592-aca413579d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        //             },
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://images.unsplash.com/photo-1682688759350-050208b1211c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        //             },
        //         ]}
        //     />
        //     <Message
        //         avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        //         isMe={false}
        //         isReaded={false}
        //         isTyping
        //     />
        //     <Message
        //         avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        //         date={date}
        //         isMe={false}
        //         isReaded={false}
        //         attachments={[
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
        //             },
        //         ]}
        //     />
        //      <Message
        //         avatar="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        //         date={date}
        //         isMe={false}
        //         isReaded={false}
        //         audio="https://www.myinstants.com/media/sounds/y2mate_HOnnyD0.mp3"
        //     />
        // </section>
        //#endregion
    )
}

export default Home