import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import CategoryIcon from './CategoryIcon'
import { mapCategory } from '../utils/categories'
import { ThreadContext } from '../contexts/ThreadContext'

const MakePostContainer = styled.form`
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
    max-width: 500px;
    min-width: 400px;
    
    padding: 30px;
    border-radius: .25em;

    input:focus {
        background-color: white;
    }
    input, button, textarea {
        margin: 10px;
        padding: 18px;
        border: none;
        
        border-radius: 0.25em;
        text-align: center;
        font-size: 0.75em;
    }
    textarea {
        text-align: left;
        font-size: .80rem;
    }
    input {
        border: 1px solid var(--border-color);
        text-align: left;
    }
    button{
        background-color: var(--primary-color);
        color: white;
        cursor: pointer;
        transition: background-color .2s ease-in-out;
        transition: box-shadow .6s ease-out;
    }

    button:hover{
        background-color: #7f62ff;
        box-shadow: inset(3px 2px 0 4px #7f62ff);
        box-shadow: 0px 0px 120px 17px #c1aeff;
    }

    h1 {
        font-weight: 400;
        display: flex;
        align-items: center;
        svg {
            margin-right: 10px;
            color: var(--primary-color);
        }
    }
    p {
        font-size: 0.75em;
        font-weight: 400;
    }
    .titleAndSelectCont{
        display: flex;
        align-items: center;
        label {
            font-size: .9rem;
        }
    }

    select {
        padding: 1rem;
        border: none;
        margin: 10px;
        svg {
            color: black;
        }
    }
    .redBorder {
        border: 1px solid red;
    }
`

const MakePost = () => {
    const [userData, setUserData] = useState()
    const { addPost } = useContext(ThreadContext);
    const [postCategory, setPostCategory] = useState(null)


    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost({...userData, postCategory});
    }

    return (
        <MakePostContainer onSubmit={handleSubmit}>
            {/* We have to check !== null because 0 is a false value in js */}
            <h1>{postCategory !== null ? <CategoryIcon postCategory={postCategory} /> : "" }{userData?.title ? userData.title : "Post Title"}</h1>
            <div className='titleAndSelectCont'>
                <input onChange={handleChange} type="text" name="title" placeholder="Post Title" />
                <select defaultValue="" onChange={e => setPostCategory(mapCategory(e.target.value))} name="category">
                    <option value="" disabled>Post category</option>
                    <option value="question">Question </option>
                    <option value="suggestion">Suggection</option>
                    <option value="clarification">Clarification</option>
                </select>
            </div>
            <textarea onChange={handleChange} type="textarea" name="content" placeholder="Add something..." />
            {<label htmlFor='password'>Passwords are not matching</label> }
            {/* {
                <>
                    <input className={notMatchingPassword ? "redBorder" : ""} onChange={handleChange} type="password" placeholder="Confirm Password" name="conPassword" />
                    {notMatchingPassword && <label htmlFor='conPassword'>Passwords are not matching</label> }
                </>
            } */}
            <button>Submit</button>
        </MakePostContainer>
    )
}

export default MakePost