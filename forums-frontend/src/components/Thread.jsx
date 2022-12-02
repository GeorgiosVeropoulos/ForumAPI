import React from 'react'
import styled from 'styled-components'
import PostViewer from './PostViewer'

const ThreadContainer = styled.div`
  h1{
    font-size: 2.5rem;
  }
`

const Thread = ({ name, posts }) => {

  return (
    <ThreadContainer>
      <h1>{name}</h1>
      {posts.map((post, index) => (
        <PostViewer key={index} {...post} />
      ))}
    </ThreadContainer>
  )
}

export default Thread