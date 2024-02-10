import React from 'react'
import Like from './Like'
import Comment from './Comment'

function Post(props) {
  return (
    <>
    <h1>{props.name}</h1>
    <Like/>
    <Comment/>
    </>
  )
}

export default Post