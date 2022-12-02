import React, { useState } from 'react'
import styled from 'styled-components'
import { truncate } from '../utils/strHlpers'
import CategoryIcon from './CategoryIcon'

const PostContainer = styled.div`
    width: 500px;
    border: 1px solid var(--border-color);
    background-color: white;
    border-radius: 7px;
    margin: 1rem;
    padding: 1rem;
    h1 {
        cursor: pointer;
        margin-top: -11px;
    }
    button {
        cursor: pointer;
        border: none;
        border-radius: 3px;
        padding: .8rem 1.2rem;
        background-color: var(--primary-color);
        color: white;
        transition: background-color .2s ease-in-out;
    }
    button:hover{
        background-color: #7f62ff;

    }
    .postNameCont{
        display: flex;
        font-weight: 500;
        svg {
            /* margin-top: 2.4rem; */
            margin-right: .5rem;
            color: var(--primary-color);
        }
    }
    .authorCont {
        display: flex;
        font-size: .8rem;
        align-items: center;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        p {
            margin-left: .5rem;
        }
    }
`

const PostViewer = ({ postCategory, author, title, content }) => {
    const [showFullContent, setShowFullContent] = useState(false)
    const handleOnClick = (e) => {

    }
    return (
        <PostContainer>
            <div className='authorCont'>
                <p>{author ? author : "Unknown"}</p>
            </div>
            <div className='postNameCont'>
                <CategoryIcon postCategory={postCategory} />
                <h1 onClick={handleOnClick}>{title}</h1>
            </div>
            <p>{showFullContent ? content : truncate(content)}</p>
            <button onClick={() => setShowFullContent(!showFullContent)}>{showFullContent ? "Show Less.." : "Read More"}</button>
        </PostContainer>
    )
}

export default PostViewer;