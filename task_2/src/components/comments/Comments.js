import React from 'react'
import Comment from '../comment/Comment'
import "./comments.css"

export default function Comments() {
  return (
    <div className='comments'>
      <div className="commentsWrapper">
        <div className="commentCount">45 Comments</div>

        <Comment isActive={true}/>
        <Comment isActive={false}/>
      </div>
    </div>
  )
}
