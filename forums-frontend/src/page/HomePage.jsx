import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Thread from '../components/Thread'
import { ThreadContext } from '../contexts/ThreadContext'
import axios from 'axios'
import MakePost from '../components/MakePost'

const HomePageContainer = styled.div`
    nav > ul {
        font-family: var(--primary-font);
        max-width: 600px;
        display: flex;
        align-items: center;
        li{
            margin: 1rem;
            list-style: none; 
        }
        a {
            text-decoration: none;
            color: #9e9e9e;
        }
        a.active {
            color: black;
            font-weight: 600;
        }
        .createNewThread{
            font-size: 2rem;
            color: black;
            transition: color .2s ease-in-out;
        }
        .createNewThread:hover{
            color: var(--primary-color);
        }
    }
`

const HomePage = () => {
    const [activeThread, setActiveThread] = useState(null)
    const [posts, setPosts] = useState(null)
    const [showMakeThread, setShowMakeThread] = useState(false)
    const [threads, setThreads] = useState([])

    useEffect(() => {
        // fetch threads from db
        const fetchThreads = async () => {
            // const res = await serverInstance.get(threadEndPoints.getAllThreads)
            const res = await axios.get('https://localhost:7185/api/threads')
            setThreads(res.data)
        }

        fetchThreads();
    }, [activeThread])

    const handleFetchOnThreadClick = async (thread) => {
        setActiveThread(thread)
        const res = await axios.get('https://localhost:7185/api/threads/' + thread.id)
        setPosts(res.data)
    }
    const addPost = async (post) => {
        const newPost = { ...post, threadId: activeThread.id }
        const newPosts = [...posts, newPost]
        setPosts(newPosts)
        console.log(newPost)
        await axios.post('https://localhost:7185/api/post/', newPost).catch(err => {
            console.log(err.response.data)
            if (err.response.data == "Post contains spam") {
                alert("Post already exists")
            } else if (err.response.data == "Post contains profanity") {
                alert("Post contains profanity")
            }
        })
    }

    const isThreadActive = (threadName) => threadName === activeThread?.name

    return (
        <Layout>
            <HomePageContainer>
                {/* Create a nav to switch between threads */}
                <nav>
                    <ul>
                        {threads.map((thread, index) => (
                            <li key={index}>
                                <a onClick={() => handleFetchOnThreadClick(thread)}
                                    name={thread.name}
                                    className={isThreadActive(thread.name) ? "active" : ""}
                                    href='#'>
                                    {thread.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a onClick={() => setShowMakeThread(!showMakeThread)} className='createNewThread' href='#'>+</a>
                        </li>
                    </ul>
                </nav>
                {/* Even though for now its not needed later on we gonna extract some code into a seperate child elements
                    so we would need to pass the data down to the child elements. So to avoid prop drilling we gonna use context */}
                <ThreadContext.Provider value={{ activeThread, addPost }}>
                    {showMakeThread && <MakePost />}
                </ThreadContext.Provider>

                {(activeThread && posts) ? <Thread name={activeThread.name} posts={posts} /> : ""}
            </HomePageContainer>
        </Layout>
    )
}

export default HomePage;
